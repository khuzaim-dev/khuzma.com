"use client";

import { motion } from "motion/react";
import { experience } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4"
      id="work"
    >
      <div>
        <p className="section-label">Experience</p>
        <p className="text-sm text-neutral-500 mt-1">
          Places I've shipped products and continuously improved my skills.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-6"
      >
        {experience.map((exp) => (
          <motion.div key={exp.company} variants={item} className="flex gap-4">
            {/* Year range */}
            <span className="w-24 shrink-0 text-xs text-neutral-400 pt-0.5 leading-relaxed">
              {exp.range}
            </span>

            {/* Content */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {/* Logo placeholder */}
                <div
                  className="w-5 h-5 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: exp.color }}
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-neutral-900">
                  {exp.role}{" "}
                  <span className="font-normal text-neutral-500">at {exp.company}</span>
                </span>
              </div>
              <p className="text-sm text-justify text-neutral-500 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
