import { MeetingBooking } from "@/components/cal-embed";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function MeetingPage() {
  return (
    <div className="max-w-[608px] mx-auto px-6 py-20 min-h-screen">
      <Link href="/" className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Link>
      
      <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight">Let's chat!</h1>
      <p className="text-neutral-500 mt-3 text-base leading-relaxed">
        Choose a time that works best for you. We can discuss your project, answer questions, or just get to know each other.
      </p>

      <MeetingBooking />
    </div>
  );
}
