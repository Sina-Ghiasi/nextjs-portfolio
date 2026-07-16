"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Tool {
  name: string;
  imageUrl: string;
}

interface SkillsListProps {
  devTools: Tool[];
}

export default function SkillsList({ devTools }: SkillsListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 0,
          y: 25,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;

    gsap.to(e.currentTarget, {
      scale: 1.15,
      y: -8,
      duration: 0.4,
      ease: "back.out(2.5)",
      overwrite: "auto",
    });
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;

    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-x-16"
    >
      {devTools.map((tool) => (
        <div
          key={tool.name}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          className="flex min-w-16 cursor-pointer flex-col items-center gap-2 md:min-w-24"
        >
          <div className="relative h-12 w-12">
            <Image
              src={tool.imageUrl}
              alt={tool.name}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {tool.name}
          </h4>
        </div>
      ))}
    </div>
  );
}
