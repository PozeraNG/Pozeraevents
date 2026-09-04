"use client";

import { useEffect, useState } from "react";
import { getPageReady, subscribePageReady } from "./pageReadyStore";

export function usePageReady() {
  const [ready, setReady] = useState(getPageReady);
  useEffect(() => subscribePageReady(setReady), []);
  return ready;
}
