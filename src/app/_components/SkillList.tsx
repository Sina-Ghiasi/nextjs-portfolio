"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { DevToolType } from "@/types/devTools";

interface SkillListProps {
  devTools: DevToolType[];
}

export default function SkillList({ devTools }: SkillListProps) {
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
          duration: 0.5,
          stagger: 0.05,
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
      className="grid grid-cols-[repeat(auto-fit,minmax(4rem,1fr))] justify-center gap-6 md:gap-x-22"
    >
      {devTools.map((tool) => (
        <div
          key={tool.id}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          className="flex cursor-pointer flex-col items-center gap-2"
        >
          <div className="relative size-10 md:size-12">
            <Image
              src={tool.imageUrl}
              alt={tool.name}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <h4 className="text-center text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {tool.name}
          </h4>
        </div>
      ))}
    </div>
  );
}
