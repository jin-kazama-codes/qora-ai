"use client"
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/AnimatedBeam";
import Image from 'next/image';

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex  items-center justify-center rounded-full bg-transparent  shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="text-center">
      <div className="w-[23rem] mx-auto pt-20">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 text-white">
          Empowered by your Brain AI.
        </h2>
        <p className="text-lg text-gray-300">
          Your unique knowledge. Qora’s expertise. Combined into one.
        </p>
      </div>


      <div
        className="relative flex  w-full pt-8 items-center justify-center overflow-hidden "
        ref={containerRef}
      >
        <div className="flex w-[60vw]  size-full pt-5   flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row  items-center justify-between">
            <Circle ref={div1Ref}>
              <Image
                src="/image/carousel1.png" // Replace with the path to your image
                alt="Oliver"
                width={150} // Increased width
                height={150} // Increased height
              />
            </Circle>
            <Circle ref={div5Ref}>
              <Image
                src="/image/carousel2.png" // Replace with the path to your image
                alt="Brain"
                width={150} // Increased width
                height={150} // Increased height
              />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <Image
                src="/image/carousel4.png" // Replace with the path to your image
                alt="Cooper"
                width={150} // Increased width
                height={150} // Increased height
              />
            </Circle>
            <Circle ref={div4Ref} className="">
              <Image
                src="/image/brain.webp" // Replace with the path to your image
                alt="Brain"
                width={300} // Increased width
                height={300} // Increased height
              />
            </Circle>
            <Circle ref={div6Ref}>
              <Image
                src="/image/carousel3.png" // Replace with the path to your image
                alt="Cassie"
                width={150} // Increased width
                height={150} // Increased height
              />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <Image
                src="/image/carousel2.png" // Replace with the path to your image
                alt="Cooper"
                width={150} // Increased width
                height={150} // Increased height
              />
            </Circle>
            <Circle ref={div7Ref}>
              <Image
                src="/image/carousel1.png" // Replace with the path to your image
                alt="James"
                width={150} // Increased width
                height={150} // Increased height
              />
            </Circle>
          </div>
        </div>

        {/* Top Curved Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={75} // Negative for top beams
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
          curvature={75} // Negative for top beams
          endYOffset={-10}
        />

        {/* Bottom Curved Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={0} // Positive for bottom beams
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={75} // Positive for bottom beams
          endYOffset={10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          curvature={-75} // Positive for bottom beams
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={50} // Positive for bottom beams
          endYOffset={-10}
          reverse
        />
      </div>
    </div>
  );
}
