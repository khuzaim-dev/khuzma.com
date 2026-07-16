"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export function MeetingBooking() {
  const [duration, setDuration] = useState<"15min" | "30min" | null>(null);

  if (duration) {
    return (
      <div className="mt-8 flex flex-col gap-4">
        <Button variant="ghost" onClick={() => setDuration(null)} className="w-fit cursor-pointer">
          &larr; Back to meeting types
        </Button>
        <div className="w-full h-[600px] rounded-xl border border-neutral-200 overflow-hidden bg-white">
          <iframe 
            src={`https://cal.com/khuzaim/${duration}?embed=true`} 
            style={{ width: "100%", height: "100%", border: "none" }}
            title={`Book ${duration} Meeting`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mt-8">
      <Button 
        variant="outline" 
        onClick={() => setDuration("15min")}
        className="w-full h-14 text-base rounded-xl border-neutral-200 cursor-pointer"
      >
        Book 15 Minute Meeting
      </Button>
      <Button 
        variant="default" 
        onClick={() => setDuration("30min")}
        className="w-full h-14 text-base rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer"
      >
        Book 30 Minute Meeting
      </Button>
    </div>
  );
}
