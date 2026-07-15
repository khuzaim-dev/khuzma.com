import { SiteHeader } from "@/components/site-header";
import { ProfileSection } from "@/components/profile-section";
import { ExperienceSection } from "@/components/experience-section";
import { StuffIDoSection } from "@/components/stuff-i-do-section";
import { StackRow } from "@/components/stack-row";
import { WritingSection } from "@/components/writing-section";
import { ChatContactSection } from "@/components/chat-contact-section";
import { SignatureQuote } from "@/components/signature-quote";
import { SiteFooter } from "@/components/site-footer";

import { getPosts } from "@/lib/markdown";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[640px] mx-auto px-4 space-y-16">
        <SiteHeader /> 
        <ProfileSection />
        <ExperienceSection />
        <StuffIDoSection />
        <StackRow />
        <WritingSection posts={posts} />
        <ChatContactSection />
        <SignatureQuote />
        <SiteFooter />
      </div>
    </div>
  );
}
