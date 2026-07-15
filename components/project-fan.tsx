"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { FanItem } from "@/lib/data";

interface ProjectFanProps {
  items: FanItem[];
}

export function ProjectFan({ items }: ProjectFanProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Fan container */}
      <div
        ref={ref}
        className="relative h-52 w-full overflow-visible flex items-center justify-center select-none"
        aria-hidden="true"
      >
        {items.map((card, i) => (
          <motion.div
            key={i}
            className="absolute w-36 h-44 rounded-md border border-neutral-200 shadow-md cursor-pointer"
            style={{ backgroundColor: card.color }}
            initial={{
              rotate: 0,
              x: 0,
              opacity: 0,
              scale: 0.9,
            }}
            animate={
              isInView
                ? {
                    rotate: card.rotation,
                    x: card.offsetX,
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    rotate: 0,
                    x: 0,
                    opacity: 0,
                    scale: 0.9,
                  }
            }
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: i * 0.06,
            }}
            whileHover={{
              y: -10,
              rotate: card.rotation * 0.4,
              scale: 1.04,
              zIndex: 50,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}
