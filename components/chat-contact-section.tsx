"use client";

import { motion } from "motion/react";

import { EmailCard } from "@/components/email-card";
import { ContactFormCard } from "@/components/contact-form-card";
import { ActionListCard } from "@/components/action-list-card";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export function ChatContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4"
      id="contact"
    >
      <p className="section-label">Contact</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 max-w-sm"
      >
        <motion.div variants={{
          hidden: { opacity: 0, y: 8 },
          show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }
        }}>
          <EmailCard email="khuzaim.dev@gmail.com" note="I reply within 24 hours" />
        </motion.div>
        
        <motion.div variants={{
          hidden: { opacity: 0, y: 8 },
          show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }
        }}>
          <ContactFormCard />
        </motion.div>

        <motion.div variants={{
          hidden: { opacity: 0, y: 8 },
          show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }
        }}>
          <ActionListCard actions={["Connect on LinkedIn", "Book video call"]} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
