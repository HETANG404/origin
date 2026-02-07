import { notFound } from "next/navigation";
import styles from "@/styles/profile-markdown.module.css";
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
      <h1 className="text-5xl md:text-6xl font-bold mb-2">MA MINGYANG</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—— Jastin Tang Alin
      </h2>

      <div className="mb-36" />

      <div className={`prose ${styles.markdownProse}`}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <div className="mb-36" />
    </article>
  );
}
