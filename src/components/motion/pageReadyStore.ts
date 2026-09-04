"use client";

// A tiny external store (outside React) so NavTransition — mounted once at
// the layout root — and every page's mount-triggered hero content — mounted
// deep inside whatever route is currently active — can share one "is the
// logo transition still covering the screen?" flag without needing a
// Context provider to wrap both trees.
//
// Defaults to true: a direct/first load has no logo transition in front of
// it, so mount-triggered content should animate in immediately, same as
// before this existed. NavTransition flips it false the instant a nav click
// is intercepted, and back to true once the logo transition's hold ends —
// that's the signal every hero's entrance animation waits on.
type Listener = (ready: boolean) => void;

let ready = true;
const listeners = new Set<Listener>();

export function getPageReady() {
  return ready;
}

export function setPageReady(value: boolean) {
  if (ready === value) return;
  ready = value;
  listeners.forEach((listener) => listener(value));
}

export function subscribePageReady(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
