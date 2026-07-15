"use client";

import { motion } from "motion/react";
import { NowPlayingCard } from "@/components/now-playing-card";
import { photos } from "@/lib/data";

export function PersonalSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-5"
    >
      <div>
        <p className="section-label">Personal</p>
        <p className="text-sm text-neutral-500 mt-1">
          In my spare time, I enjoy listening to music and taking photos with my
          iPhone.
        </p>
      </div>

      <NowPlayingCard />
    </motion.section>
  );
}
