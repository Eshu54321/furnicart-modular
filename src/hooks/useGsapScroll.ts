"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "stagger-children"
  | "parallax"
  | "counter"
  | "reveal-line";

interface UseGsapScrollOptions {
  type?: AnimationType;
  delay?: number;
  duration?: number;
  distance?: number;
  staggerAmount?: number;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  markers?: boolean;
}

export function useGsapScroll<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapScrollOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    type = "fade-up",
    delay = 0,
    duration = 1,
    distance = 60,
    staggerAmount = 0.15,
    scrub = false,
    start = "top 85%",
    end = "bottom 20%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      switch (type) {
        case "fade-up":
          gsap.fromTo(
            el,
            { opacity: 0, y: distance },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                end,
                scrub,
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "fade-left":
          gsap.fromTo(
            el,
            { opacity: 0, x: -distance },
            {
              opacity: 1,
              x: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                end,
                scrub,
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "fade-right":
          gsap.fromTo(
            el,
            { opacity: 0, x: distance },
            {
              opacity: 1,
              x: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                end,
                scrub,
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "scale-up":
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.85 },
            {
              opacity: 1,
              scale: 1,
              duration,
              delay,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: el,
                start,
                end,
                scrub,
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "stagger-children":
          gsap.fromTo(
            el.children,
            { opacity: 0, y: distance },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              stagger: staggerAmount,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                end,
                scrub,
                toggleActions: "play none none none",
              },
            }
          );
          break;

        case "parallax":
          gsap.fromTo(
            el,
            { y: -distance / 2 },
            {
              y: distance / 2,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
          break;

        case "counter":
          // For counter animations on stat numbers
          const counterEls = el.querySelectorAll("[data-count]");
          counterEls.forEach((counterEl) => {
            const target = parseInt(
              (counterEl as HTMLElement).dataset.count || "0",
              10
            );
            const obj = { value: 0 };
            gsap.to(obj, {
              value: target,
              duration: 2,
              delay,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none none",
              },
              onUpdate: () => {
                counterEl.textContent = Math.round(obj.value).toString();
              },
            });
          });
          break;

        case "reveal-line":
          gsap.fromTo(
            el,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: duration * 1.5,
              delay,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: el,
                start,
                end,
                scrub,
                toggleActions: "play none none none",
              },
            }
          );
          break;
      }
    }, el);

    return () => ctx.revert();
  }, [type, delay, duration, distance, staggerAmount, scrub, start, end]);

  return ref;
}

// Lightweight wrapper for simple one-liner usage
export function useGsapFadeUp(delay = 0, duration = 1) {
  return useGsapScroll({ type: "fade-up", delay, duration });
}

export function useGsapStagger(stagger = 0.15) {
  return useGsapScroll({ type: "stagger-children", staggerAmount: stagger });
}
