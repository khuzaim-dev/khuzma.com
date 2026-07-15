"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/data";
import Image from "next/image";

export function ProfileSection() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email).then(() => {
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "c" || e.key === "C") {
        copyEmail();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4"
    >
      {/* Avatar */}
      <div className="w-fit">
        <div className="border border-dashed border-neutral-300 rounded-full p-1 w-fit">
          <div className="w-14 h-14 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden relative">
            <Image src="/profile.jpeg" alt="Profile" fill className="object-cover object-top scale-[1.4] translate-y-[10%]" />
          </div>
        </div>
      </div>

      {/* Name + verified badge */}
      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5">
          <span className="text-base font-semibold text-neutral-900">
            {siteConfig.name}
          </span>
          {/* Blue verified checkmark */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Verified">
            <circle cx="8" cy="8" r="8" fill="#0A84FF" />
            <path
              d="M4.5 8.5L6.5 10.5L11 6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-sm text-neutral-400">{siteConfig.role}</p>
      </div>

      {/* Bio */}
      <p className="text-sm text-justify text-neutral-600 leading-relaxed w-full">
        {siteConfig.bio.before}
      </p>

      {/* Copy email utility */}
      <div className="flex items-center gap-1.5 text-sm text-neutral-400">
        <span>Press</span>
        <kbd
          onClick={copyEmail}
          className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs border border-neutral-300 rounded bg-neutral-50 text-neutral-700 cursor-pointer hover:bg-neutral-100 transition-colors select-none"
        >
          C
        </kbd>
        <span>to copy my email</span>
        {copied && (
          <motion.span
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-emerald-500 font-medium"
          >
            Copied!
          </motion.span>
        )}
      </div>
    </motion.section>
  );
}
