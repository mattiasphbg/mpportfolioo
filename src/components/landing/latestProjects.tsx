"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "src/types/project";
import Image from "next/image";
interface ParallaxProjectsProps {
  projects: Project[];
}

export default function ParallaxProjects({ projects }: ParallaxProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-zinc-950">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center text-7xl font-bold text-[#ffcad4] md:text-8xl"
      >
        LATEST WORK
      </motion.h1>
      <div className="mx-auto max-w-6xl px-4">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          const scaleProgress = useTransform(
            scrollYProgress,
            [0, 1],
            [1, targetScale],
          );

          return (
            <motion.div
              key={project.id}
              style={{
                scale: scaleProgress,
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [1, 0.8, 0.6],
                ),
              }}
              className="mb-8"
            >
              <div className="overflow-hidden rounded-lg bg-zinc-900">
                <div className="flex items-start justify-between p-6">
                  <h2 className="text-3xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <button className="rounded-full p-2 text-white transition-colors hover:bg-zinc-800">
                    <ArrowUpRight className="h-6 w-6" />
                  </button>
                </div>
                <div className="relative h-[300px] md:h-[400px]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill={true}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-zinc-400">{project.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
