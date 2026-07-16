"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

function RawCalEmbed({ duration }: { duration: "15min" | "30min" }) {
  useEffect(() => {
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; cal.q = cal.q || []; 
          let script = d.createElement("script");
          script.src = A; 
          d.head.appendChild(script); 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", duration, {origin:"https://app.cal.com"});
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;

    Cal.ns[duration]("inline", {
      elementOrSelector: `#my-cal-inline-${duration}`,
      config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
      calLink: `khuzaim/${duration}`,
    });

    Cal.ns[duration]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  }, [duration]);

  return <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id={`my-cal-inline-${duration}`}></div>;
}

export function MeetingBooking() {
  const [duration, setDuration] = useState<"15min" | "30min" | null>(null);

  if (duration) {
    return (
      <div className="mt-8 flex flex-col gap-4">
        <Button variant="ghost" onClick={() => setDuration(null)} className="w-fit cursor-pointer">
          &larr; Back to meeting types
        </Button>
        <div className="w-full h-[600px] rounded-xl border border-neutral-200 overflow-hidden bg-white">
          <RawCalEmbed duration={duration} />
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
