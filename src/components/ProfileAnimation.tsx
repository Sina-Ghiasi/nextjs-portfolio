"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function ProfileAnimation() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const t1 = gsap.timeline();
      t1.fromTo(
        ".img",
        {
          autoAlpha: 0,
          y: -30,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "expo.out",
        }
      );
      t1.fromTo(
        ".name",
        {
          autoAlpha: 0,
          y: -20,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power1.in",
        }
      );
      t1.fromTo(
        ".job-title",
        { y: -40, autoAlpha: 0, scale: 0.2 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "expo.out",
        }
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
        className="img invisible mx-auto mb-2 w-[256px] lg:w-[300px] h-auto"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
        priority
      />

      <h1
        className="text-[clamp(2.5rem,6vmin,6rem)] font-extrabold "
        aria-label="سینا قیاسی"
      >
        <span className="name invisible text-base-content">سینا</span>
        &nbsp;
        <span className="name invisible text-base-content">قیاسی</span>
      </h1>
      <div className="job-title invisible text-[clamp(1rem,3vmin,3rem)] font-bold text-primary">
        یک توسعه دهنده خلاق وب
      </div>
    </div>
  );
}
