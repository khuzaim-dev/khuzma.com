"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function ContactFormCard() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Stub: fake success
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-4 flex flex-col items-center justify-center gap-2 min-h-[120px]">
        <CheckCircle size={20} className="text-emerald-500" strokeWidth={1.5} />
        <p className="text-sm text-neutral-700 font-medium">Message sent ✓</p>
        <p className="text-xs text-neutral-400 text-center">
          I'll get back to you soon. Keep it short and sweet!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-neutral-200 bg-white p-3 space-y-2 min-w-[260px]"
    >
      <div>
        <Input
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="h-8 text-xs bg-neutral-50 border-neutral-200 placeholder:text-neutral-400"
        />
        {errors.name && (
          <p className="text-[10px] text-red-400 mt-0.5 pl-1">{errors.name}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="h-8 text-xs bg-neutral-50 border-neutral-200 placeholder:text-neutral-400"
        />
        {errors.email && (
          <p className="text-[10px] text-red-400 mt-0.5 pl-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          rows={3}
          className="text-xs resize-none bg-neutral-50 border-neutral-200 placeholder:text-neutral-400"
        />
        {errors.message && (
          <p className="text-[10px] text-red-400 mt-0.5 pl-1">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="sm"
        className="w-full h-8 text-xs bg-neutral-900 text-white hover:bg-neutral-700"
      >
        Submit
      </Button>
    </form>
  );
}
