"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ChatBubbleProps {
  from: "user" | "reply";
  children: ReactNode;
}

export function ChatBubble({ from, children }: ChatBubbleProps) {
  const isUser = from === "user";

  return (
    <motion.div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
      }}
    >
      <div
        className={[
          "max-w-[85%] px-3.5 py-2 text-sm leading-relaxed",
          isUser
            ? "bg-[#0A84FF] text-white rounded-2xl rounded-br-sm"
            : "bg-neutral-100 text-neutral-900 rounded-2xl rounded-bl-sm",
        ].join(" ")}
      >
        {children}
      </div>
    </motion.div>
  );
}
