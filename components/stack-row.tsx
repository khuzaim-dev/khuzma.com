"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const techStack = [
  { label: "JavaScript", icon: "skill-icons:javascript" },
  { label: "React", icon: "skill-icons:react-dark" },
  { label: "Next.js", icon: "skill-icons:nextjs-light" },
  { label: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark" },
  { label: "Shadcn UI", icon: "simple-icons:shadcnui" },
  { label: "Node.js", icon: "skill-icons:nodejs-dark" },
  { label: "Git", icon: "skill-icons:git" },
  { label: "GitHub", icon: "skill-icons:github-dark" },
  { label: "Photoshop", icon: "skill-icons:photoshop" },
  { label: "Figma", icon: "skill-icons:figma-dark" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export function StackRow() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4 pt-2"
    >
      <p className="section-label">Tech Stack</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap gap-3 sm:gap-4"
      >
        {techStack.map((s) => (
          <motion.div
            key={s.label}
            variants={item}
            title={s.label}
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white border border-neutral-200/60 rounded-[1rem] sm:rounded-[1.25rem] shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-default overflow-hidden"
          >
            {s.icon.startsWith("skill-icons:") ? (
              <Icon 
                icon={s.icon} 
                className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3" 
              />
            ) : (
              <Icon 
                icon={s.icon} 
                className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-800 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3" 
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
