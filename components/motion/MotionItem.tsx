"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type VariantConfig = {
  hidden?: {
    opacity?: number;
    x?: number;
    y?: number;
  };
  show?: {
    opacity?: number;
    x?: number;
    y?: number;
    transition?: {
      duration?: number;
      delay?: number;
    };
  };
};

export default function MotionItem({
  children,
  variants,
}: {
  children: ReactNode;
  variants?: VariantConfig;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const hidden = variants?.hidden ?? { opacity: 0, y: 24 };
  const show = variants?.show ?? { opacity: 1, y: 0, transition: { duration: 0.6 } };
  const duration = show.transition?.duration ?? 0.6;
  const delay = show.transition?.delay ?? 0.3;
  const initialTransform = `translateX(${hidden.x ?? 0}px) translateY(${hidden.y ?? 0}px)`;
  const targetTransform = `translateX(${show.x ?? 0}px) translateY(${show.y ?? 0}px)`;

  return (
    <div
      ref={ref}
      className="opacity-0 transition-all ease-out"
      style={{
        opacity: visible ? show.opacity ?? 1 : hidden.opacity ?? 0,
        transform: visible ? targetTransform : initialTransform,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}