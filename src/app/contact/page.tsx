import { notFound } from "next/navigation";
import { getMarkdownContent } from "@/lib/getMarkdown";


export const metadata = {
  title: "Origin-Tang",
  description: "Page description",
};

export default async function Home() {
  const htmlContent = await getMarkdownContent("TANG_about.md");

  if (!htmlContent) {
    return notFound();
  }

  return (
    <article className="prose prose-neutral mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-6xl font-bold mb-2">Contact page</h1>
      <div className="mb-12" />
      <h1 className="text-6xl font-bold mb-2">Please be patient — the Contact page is coming soon.</h1>
      <div className="mb-36" />



    </article>
  );
}
