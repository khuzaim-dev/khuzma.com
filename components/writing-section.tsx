"use client";

import { motion } from "motion/react";
import { Clock } from "lucide-react";
import Link from "next/link";
import { PostMeta } from "@/lib/markdown";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" as const } },
};

export function WritingSection({ posts }: { posts: PostMeta[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4"
      id="thoughts"
    >
      <p className="section-label">Writing</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-0"
      >
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            variants={item}
            className="flex items-center justify-between py-2.5 border-b border-neutral-100 last:border-0 group"
          >
            {/* Date */}
            <span className="w-20 shrink-0 text-xs text-neutral-400 tabular-nums">
              {post.date || ""}
            </span>

            {/* Title */}
            <Link
              href={`/thoughts/${post.slug}`}
              className="flex-1 text-sm text-neutral-700 group-hover:text-neutral-900 hover:underline underline-offset-2 transition-colors truncate mx-2"
            >
              {post.title}
            </Link>

            {/* Reading time */}
            <div className="flex items-center gap-1 text-xs text-neutral-400 shrink-0">
              <Clock size={11} strokeWidth={1.5} />
              <span>{post.minutes}m</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
