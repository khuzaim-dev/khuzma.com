"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";
import Image from "next/image";

function getFormattedTime() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  // Static GMT+5 offset string as specified
  return `${hh}:${mm}:${ss} GMT+5`;
}

export function SiteFooter() {
  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="pb-8">
      <Separator className="bg-neutral-200 mb-4" />
      <div className="flex items-center justify-between">
        {/* Left: avatar + name */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0 relative">
            <Image src="/profile.png" alt="Profile" fill className="object-cover object-top scale-[1.4] translate-y-[10%]" />
          </div>
          <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
            Khuzaim
          </span>
        </div>

        {/* Right: live clock */}
        <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 tabular-nums">
          <Clock size={11} strokeWidth={1.5} />
          <span suppressHydrationWarning>{time}</span>
        </div>
      </div>
    </footer>
  );
}
