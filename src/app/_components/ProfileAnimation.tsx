"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function ProfileAnimation() {
  const container = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  useGSAP(
    () => {
      if (!imageLoaded) return;

      const tl = gsap.timeline();

      tl.fromTo(
        ".img",
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "expo.out",
        },
        0,
      );

      tl.fromTo(
        ".name",
        { opacity: 0, x: -30, rotation: -10 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        0.4,
      );

      tl.fromTo(
        ".job-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.8)",
        },
        0.8,
      );
    },
    { scope: container, dependencies: [imageLoaded] },
  );

  return (
    <div
      className="flex flex-col gap-2 text-center overflow-hidden mt-4"
      ref={container}
    >
      <div className="relative mx-auto mb-2 w-[256px] lg:w-[300px] h-[256px] lg:h-[300px] overflow-hidden">
        <Image
          src="/images/profile-min.png"
          alt="سینا قیاسی"
          fill
          sizes="(max-width: 768px) 80vw, 300px"
          className="img object-cover opacity-0"
          priority
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-base-100 to-transparent pointer-events-none" />
      </div>

      <h1 className="name text-[clamp(2.5rem,6vmin,6rem)] font-extrabold opacity-0">
        سینا قیاسی
      </h1>
      <div className="job-title text-[clamp(1rem,3vmin,3rem)] font-bold text-primary opacity-0">
        یک توسعه دهنده خلاق وب
      </div>
    </div>
  );
}
