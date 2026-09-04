const ANNOUNCEMENT =
  "The Pozera Events Academy — Next Cohort Starts 26 October 2026 in Lekki, Lagos ◆ Only 20 Seats Per Cohort ◆ Enrol on WhatsApp: +234 814 6117 487";

export default function AnnouncementBar() {
  return (
    <div className="absolute inset-0 flex items-center overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i === 1}>
            {Array.from({ length: 4 }).map((_, j) => (
              <span
                key={j}
                className="whitespace-nowrap px-8 font-body text-[14px] font-medium tracking-wide"
              >
                {ANNOUNCEMENT}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
