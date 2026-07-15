import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  minutes: number;
}

const contentDir = path.join(process.cwd(), "content", "thoughts");

export async function getPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      // Extract H1 for title
      const h1Match = content.match(/^#\s+(.+)$/m);
      const title = h1Match ? h1Match[1] : slug;

      // Extract first paragraph for excerpt
      // Remove H1s and frontmatter, find first non-empty text
      const contentWithoutH1 = content.replace(/^#\s+(.+)$/gm, "");
      const paragraphMatch = contentWithoutH1
        .split("\n\n")
        .map((p) => p.trim())
        .filter((p) => p.length > 0 && !p.startsWith("#") && !p.startsWith("!") && !p.startsWith("["));
      const excerpt = paragraphMatch.length > 0 ? paragraphMatch[0] : "";

      const stats = readingTime(content);

      return {
        slug,
        title,
        excerpt,
        date: data.date || undefined,
        minutes: Math.ceil(stats.minutes),
      };
    });

  // Sort by date descending (newest first). If no date, put at end.
  return posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  const h1Match = content.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1] : slug;

  // Remove the first H1 from the content to avoid rendering it twice
  const contentWithoutH1 = content.replace(/^#\s+(.+)$/m, "");

  const stats = readingTime(content);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(contentWithoutH1);

  const html = processedContent.toString();

  return {
    slug,
    title,
    date: data.date || undefined,
    minutes: Math.ceil(stats.minutes),
    html,
  };
}
