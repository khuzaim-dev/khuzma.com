"use client";

import { Video, X, UserPlus } from "lucide-react";

interface ActionListCardProps {
  actions: string[];
}

const actionIcons: Record<string, React.ElementType> = {
  "Book video call": Video,
  "DM on X": X,
  "Connect on LinkedIn": UserPlus,
};

export function ActionListCard({ actions }: ActionListCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden min-w-[200px]">
      {actions.map((action, i) => {
        const Icon = actionIcons[action] ?? Video;
        return (
          <button
            key={i}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors text-left border-b border-neutral-100 last:border-0"
          >
            <Icon size={13} strokeWidth={1.5} className="text-neutral-400" />
            <span>{action}</span>
          </button>
        );
      })}
    </div>
  );
}
