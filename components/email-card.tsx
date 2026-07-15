"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface EmailCardProps {
  email: string;
  note: string;
}

export function EmailCard({ email, note }: EmailCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3 space-y-2 min-w-[220px]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-neutral-900">{email}</p>
          <p className="text-xs text-neutral-400 mt-0.5">{note}</p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 transition-colors text-xs text-neutral-600 shrink-0"
          aria-label="Copy email"
        >
          {copied ? (
            <>
              <Check size={11} strokeWidth={2} className="text-emerald-500" />
              <span className="text-emerald-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={11} strokeWidth={1.5} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
