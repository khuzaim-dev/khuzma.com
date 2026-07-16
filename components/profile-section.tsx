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
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-fit shrink-0">
          <div className="border border-dashed border-neutral-300 rounded-full p-1 w-fit">
            <div className="w-14 h-14 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden relative">
              <Image src="/profile.jpeg" alt="Profile" fill className="object-cover object-top scale-[1.4] translate-y-[10%]" />
            </div>
          </div>
        </div>

        {/* Name + verified badge + tagline */}
        <div className="space-y-1">
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
          <p className="text-sm text-neutral-500">{siteConfig.role}</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-3">
        <a href="https://www.linkedin.com/in/muhammad-khuzaim" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-1.6 0-2.32.88-2.72 1.5v-1.28h-3V18.5h3v-4.81c0-.77.19-1.53 1.05-1.53c.87 0 1.05.88 1.05 1.57V18.5zm-11-9.58a1.73 1.73 0 1 0 0-3.46a1.73 1.73 0 0 0 0 3.46m1.5 9.58V10.15h-3V18.5z"/></svg>
        </a>
        <a href="https://github.com/khuzaim-dev" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
        </a>
        <a href="https://www.instagram.com/astro_khuzma/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Zm14.5-8.5v-.5h-.5v.5z"/></g></svg>
        </a>
        <a href="/khuzaim.pdf" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors" aria-label="Resume">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M19.5 14v4.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h6m5 6.5v-3a2 2 0 0 0-2-2h-3m5 5H13a2 2 0 0 1-2-2V4.5"/><path d="M8 13h4m-4 4h8"/></g></svg>
        </a>
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
