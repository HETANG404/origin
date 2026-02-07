// app/projects/[slug]/ProjectPage.tsx
"use client";
import { Project } from "@/types/project";
import desktopStyles from "@/styles/project-markdown.module.css";
import mobileStyles from "@/styles/project-markdown.mobile.module.css";
import { useIsMobile } from "@/hooks/useIsMobile";
import RedButton from "@/components/base_ui/red_button";

export default function ProjectPage({
  project,
  htmlContent,
}: {
  project: Project;
  htmlContent: string;
}) {
  const isMobile = useIsMobile();
  const styles = isMobile ? mobileStyles : desktopStyles;

  return (
    <article className="prose prose-neutral mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-6xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500 text-3xl mb-6 mt-6">{project.subtitle}</p>

      <div className={`prose ${styles.markdownProse}`}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>

      <div className="flex justify-center gap-1 md:gap-4 mt-18 mb-36">
        <RedButton className="bg-transparent md:text-2xl" href={project.repo}>Github Repo</RedButton>
        <RedButton className="bg-transparent md:text-2xl" href={project.liveDemo}>{project.title}</RedButton>
      </div>
    </article>
  );
}
