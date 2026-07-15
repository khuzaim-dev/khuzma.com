import { getPostBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[640px] mx-auto px-4 py-16 space-y-8">
        <Link
          href="/#thoughts"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <header className="space-y-4 pb-8 border-b border-neutral-200">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            {post.date && (
              <span className="tabular-nums">
                {post.date}
              </span>
            )}
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.minutes} min read</span>
            </div>
          </div>
        </header>

        <article
          className="prose prose-neutral dark:prose-invert max-w-none mt-8 pb-16"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}
