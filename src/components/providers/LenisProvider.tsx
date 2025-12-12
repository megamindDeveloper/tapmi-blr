"use client";

import { useEffect, useRef } from "react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    type LenisInstance = { raf: (time: number) => void; destroy?: () => void };
type LenisConstructor = new (options?: {
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  lerp?: number;
}) => LenisInstance;

let lenis: LenisInstance | null = null;

    const ensureLenisScript = () =>
      new Promise<void>((resolve, reject) => {
       if (
  typeof window !== "undefined" &&
  (window as unknown as { Lenis?: LenisConstructor }).Lenis
) {
          resolve();
          return;
        }
        const existing = document.querySelector(
          'script[data-lenis="true"]'
        ) as HTMLScriptElement | null;
        if (existing) {
          existing.addEventListener("load", () => resolve());
          existing.addEventListener("error", () => reject(new Error("Lenis script failed to load")));
          return;
        }
        const script = document.createElement("script");
        script.src = "https://unpkg.com/@studio-freight/lenis/dist/lenis.min.js";
        script.async = true;
        script.setAttribute("data-lenis", "true");
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Lenis script failed to load"));
        document.body.appendChild(script);
      });

    const startLenis = async () => {
      try {
        await ensureLenisScript();
       const LenisCtor = (window as unknown as { Lenis?: LenisConstructor }).Lenis;
        if (!LenisCtor) return;

        lenis = new LenisCtor({
          smoothWheel: true,
          smoothTouch: false,
          lerp: 0.1,
        });

        const raf = (time: number) => {
          lenis?.raf(time);
          rafRef.current = requestAnimationFrame(raf);
        };
        rafRef.current = requestAnimationFrame(raf);
      } catch (e) {
        console.log("Error loading Lenis:", e);
      }
    };

    startLenis();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try {
        lenis?.destroy?.();
      } catch {}
    };
  }, []);

  return <>{children}</>;
}