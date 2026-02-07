// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getMarkdownContent } from "@/lib/getMarkdown";
import ProjectPage from "./project_page";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: { params: paramsType }) {
  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();
  if (!project) return {};

  return {
    title: "Origin-" + project.title,
    description: project.subtitle || "Project description",
  };
}

export type paramsType = Promise<{ slug: string }>;


export default async function Page(props: { params: paramsType }) {

  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();


  const htmlContent = await getMarkdownContent(project.markdownPath);
  if (!htmlContent) return notFound();

  return <ProjectPage project={project} htmlContent={htmlContent} />;
}

