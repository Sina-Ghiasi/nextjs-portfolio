"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { BenefitType } from "@/types/benefits";
import { cn } from "@/utils/cn";

interface BenefitListProps {
  benefits: BenefitType[];
}

export default function BenefitList({ benefits }: BenefitListProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      gsap.fromTo(
        gridRef.current.children,
        {
          opacity: 0,
          y: 35,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: gridRef },
  );

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;

    gsap.to(e.currentTarget, {
      y: -4,
      duration: 0.4,
      ease: "power2.out",
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
    <div ref={gridRef} className="grid grid-cols-12 gap-4">
      {benefits.map((benefit, index) => (
        <div
          key={benefit.id}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          className={cn(
            "col-span-12 rounded-xl border border-base-200 bg-base-200 p-4 text-base-content transition-colors hover:border-base-300 md:p-6",
            index < 2 ? "lg:col-span-6" : "lg:col-span-4",
          )}
        >
          <h5 className="mb-2 font-bold">{benefit.title}</h5>
          <p className="text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}
