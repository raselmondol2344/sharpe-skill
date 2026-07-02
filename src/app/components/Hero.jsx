"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#08184d]">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "240px 240px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center justify-center px-6 py-24">
        <div className="max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            🚀 Learn From Industry Experts
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Start Your
            <span className="block text-cyan-400">
              Learning Journey Today
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Choose from over <strong>80+</strong> premium courses designed to
            help you master programming, design, marketing, AI, and more.
            Learn anytime, anywhere with expert instructors.
          </p>

          {/* Button */}
          <div className="mt-10">
           <Link href={'/pages/courses'}>
            <Button
            
              size="lg"
              radius="md"
              color="primary"
              className="h-14 px-10 text-lg font-semibold"
            >
              Browse Courses
            </Button>
           
           </Link>
          </div>

          {/* Stats */}
        
        </div>
      </div>
    </section>
  );
}