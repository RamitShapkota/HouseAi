import { useEffect, useState } from "react";

/** Animates from 0 up to `target` in ~60 steps, rounding to whole numbers. */
export function useCountUp(target: number): number {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let value = 0;
    const step = target / 60;
    const id = setInterval(() => {
      value += step;
      if (value >= target) {
        setCurrent(target);
        clearInterval(id);
      } else {
        setCurrent(Math.round(value));
      }
    }, 16);
    return () => clearInterval(id);
  }, [target]);

  return current;
}
