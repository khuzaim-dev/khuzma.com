"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: 1, image: "/myprojects/project1.png", link: "https://founderfocus.tech", title: "Founder Focus" },
  { id: 2, image: "/myprojects/project2.png", link: "https://editimage.online", title: "Edit Image Online" },
  { id: 3, image: "/myprojects/project3.png", link: "https://litetube.online", title: "LiteTube" },
  { id: 4, image: "/myprojects/project4.png", link: "https://brightbench.click", title: "Bright Bench" },
  { id: 5, image: "/myprojects/project5.png", link: "https://vanta-loop-creative.aura.build", title: "Vanta Loop Creative" },
];

export function StuffIDoSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-6"
    >
      <div className="flex items-end justify-between">
        <div>
          <p className="section-label">Stuff I Do</p>
          <p className="text-sm text-neutral-500 mt-1 max-w-md leading-relaxed">
            Apps, Dashboards, Landing Pages, Design Systems, Product Sites, Branding Assets, and more.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200/80 bg-white/50 backdrop-blur-md shadow-sm hover:bg-neutral-50 hover:shadow-md transition-all duration-300 text-neutral-600 hover:text-neutral-900"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200/80 bg-white/50 backdrop-blur-md shadow-sm hover:bg-neutral-50 hover:shadow-md transition-all duration-300 text-neutral-600 hover:text-neutral-900"
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-[85%] sm:w-[calc(50%-0.5rem)] snap-start group relative rounded-2xl sm:rounded-[2rem] border border-neutral-200/60 overflow-hidden bg-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 transition-all duration-500 ease-out"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <div className="aspect-[4/3] w-full relative bg-neutral-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 85vw, 50vw"
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-neutral-900/5 rounded-2xl sm:rounded-[2rem] pointer-events-none" />
                </div>

                {/* Sleek Glassmorphic Pill */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-sm transform-gpu transition-all duration-500 group-hover:bg-white/95">
                    <h3 className="font-medium text-neutral-900 tracking-tight text-sm sm:text-base">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

