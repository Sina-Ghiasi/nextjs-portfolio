"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/utils/cn";
import { ProjectType } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";

const CARD_STACK_CONFIG = {
  offsetY: 20,
  scaleStep: 0.02,
};

export interface CardItem {
  id: string;
  title: string;
  description: string;
  imageText: string;
}

interface ProjectsListProps {
  projects: ProjectType[];
}

export default function ProjectList({ projects }: ProjectsListProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(
        "[data-animation='stacking-card']",
        container.current,
      ) as HTMLElement[];

      gsap.set(cards, {
        y: (i) => (i === 0 ? 0 : window.innerHeight + 100),
        zIndex: (i) => i,
        opacity: 1,
        transformOrigin: "center top", // Makes cards shrink toward the top, maintaining the stack illusion
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 15%",
          end: `+=${cards.length * 100}%`,
          pin: true,
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(card, {
          y: i * CARD_STACK_CONFIG.offsetY,
          duration: 1,
          ease: "power2.out",
        });

        // Cumulatively scale down ALL previous cards
        for (let j = 0; j < i; j++) {
          tl.to(
            cards[j],
            {
              scale: 1 - (i - j) * CARD_STACK_CONFIG.scaleStep,
              duration: 1,
              ease: "power2.out",
            },
            "<", // "<" means "start at the same time as the previous tween"
          );
        }
      });
    },
    { scope: container },
  );

  const totalScrollSpace = projects.length * 100;
  const totalOffsetYSpace = projects.length * CARD_STACK_CONFIG.offsetY;

  return (
    <div
      className="size-full overflow-hidden"
      style={{
        paddingBottom: `calc(${totalScrollSpace}vh + ${totalOffsetYSpace}px)`,
      }}
    >
      <div ref={container}>
        <div className="relative h-85 w-full md:h-75">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              className={cn(
                "absolute inset-0 will-change-transform",
                i !== 0 && "opacity-0",
              )}
              project={project}
              data-animation="stacking-card"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
