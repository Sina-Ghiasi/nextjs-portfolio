"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function ProfileAnimation() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Set initial visibility to avoid FCP delays
      gsap.set([".img", ".name", ".job-title"], { visibility: "visible" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".img",
        { opacity: 0, scale: 1.3, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.6,
          ease: "expo.out",
        },
        0
      );

      tl.fromTo(
        ".name",
        { opacity: 0, x: -30, rotation: -10 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        0.4
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
        0.8
      );
    },
    { scope: container }
  );

  return (
    <div
      className="flex flex-col gap-2 text-center overflow-hidden mt-4"
      ref={container}
    >
      <Image
        src={"/images/profile-min.png"}
        alt="سینا قیاسی"
        width={512}
        height={512}
        className="img mx-auto mb-2 w-[256px] lg:w-[300px] h-auto"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
        priority
      />

      <h1 className="name text-[clamp(2.5rem,6vmin,6rem)] font-extrabold">
        سینا قیاسی
      </h1>
      <div className="job-title text-[clamp(1rem,3vmin,3rem)] font-bold text-primary">
        یک توسعه دهنده خلاق وب
      </div>
    </div>
  );
}
