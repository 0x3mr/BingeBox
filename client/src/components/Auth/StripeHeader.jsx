import { useEffect, useState } from "react";

export default function StripeHeader({ trigger}) {
  const [state, setState] = useState("idle"); 
  // states: "idle" → "forward" → "pause" → "back"

  useEffect(() => {
    if (trigger) {
      setState("forward");

      // 1) Forward animation (0.5s)
      const t1 = setTimeout(() => {
        setState("pause");
      }, 500);

      // 2) Pause at max rotation (0.3s)
      const t2 = setTimeout(() => {
        setState("back");
      }, 800);

      // 3) Reset to idle after back (0.2s)
      const t3 = setTimeout(() => {
        setState("idle");
      }, 1000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [trigger]);

  // rotation degrees based on state
  const rotation =
    state === "forward" || state === "pause"
      ? "rotate-[-12deg]"
      : "rotate-0";

  // timing based on direction
  const duration =
    state === "back" ? "duration-200" : "duration-500";

  return (
    <div
      className={`h-8 w-full absolute top-0 left-0 z-30 rounded-t-2xl overflow-hidden transition-transform ease-out ${duration} ${rotation}`}
      style={{
        transformOrigin: "left bottom",
        backgroundImage:
          "repeating-linear-gradient(-45deg, #000 0px, #000 25px, #fff 25px, #fff 50px)",
      }}
    ></div>
    
  );
}
