"use client";

import { projects } from "@/data/projects";
import HorizontalCard from "../base_ui/horizontal_card";

// 临时 Project 类型（简洁明了）
type Project = {
  slug: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  images: string[];
  markdownPath: string;
  technology: string[];
  repo: string;
  liveDemo: string;
  startdate: string;
  servicesAvailable: string;
  status: string;
  tags: string[];
  team: string[];
  duration: string;
  isVisible: boolean;
};

const groupedProjects = [
  { title: "Trivel", type: "Tri" },
  { title: "Work Experience", type: "WE" },
  { title: "Self-study", type: "SS" },
  { title: "Machine Learning", type: "ML" },
  { title: "University Projects", type: "UP" },
  { title: "RPi", type: "RPi" },
];

export default function HorizontalCategories() {
  return (
    <section className="relative mt-6 mb-6 pb-6 md:pt-36">
      {groupedProjects.map((group) => {
        const filtered = projects.filter((p) => p.type === group.type && p.isVisible);
        
        if (filtered.length === 0) return null;
        
        return (
          <ProjectGroupSection
            key={group.type}
            title={group.title}
            projects={filtered}
          />
        );
      })}
    </section>
  );
}

interface ProjectGroupSectionProps {
  title: string;
  projects: Project[];
}

function ProjectGroupSection({ title, projects }: ProjectGroupSectionProps) {
  return (
    <div className="pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-3 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* 手机端横滑布局 */}
        <div className="flex sm:hidden overflow-x-auto pb-4 gap-4 -mx-4 px-4">
          {projects.map((project) => (
            <div key={`mobile-${project.slug}`} className="w-[275px]">
              <HorizontalCard
                title={project.title}
                subtitle={project.subtitle}
                backgroundImage={project.cover}
                href={`/projects/${project.slug}`}
              />
            </div>
          ))}
        </div>

        {/* 桌面端网格布局 */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4">
          {projects.map((project) => (
            <HorizontalCard
              key={`desktop-${project.slug}`}
              title={project.title}
              subtitle={project.subtitle}
              backgroundImage={project.cover}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
