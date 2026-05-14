import { useEffect, useRef } from "react";
import Granim from "granim";

type Props = {
  className?: string;
  states?: Record<string, { gradients: string[][]; transitionSpeed?: number }>;
};

export function GranimCanvas({ className, states }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const granim = new Granim({
      element: ref.current,
      direction: "left-right",
      isPausedWhenNotInView: true,
      states: states ?? {
        "default-state": {
          transitionSpeed: 4000,
          gradients: [
            ["#000000", "#1a0010"],
            ["#0a0000", "#3a0020"],
            ["#000000", "#1f0a00"],
            ["#0a0010", "#2a0030"],
          ],
        },
      },
    });
    return () => {
      try {
        granim.destroy();
      } catch {
        /* noop */
      }
    };
  }, [states]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
