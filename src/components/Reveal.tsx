import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const fallback = window.setTimeout(() => setIsVisible(true), 1800);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(() => setIsVisible(true), delay);
            io.unobserve(el);
            window.clearTimeout(fallback);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [delay]);

  // @ts-expect-error generic tag ref
  return <Tag ref={ref} className={`reveal ${isVisible ? "in" : ""} ${className}`}>{children}</Tag>;
}
