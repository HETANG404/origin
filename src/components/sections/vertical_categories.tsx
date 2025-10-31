"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import VerticalCard from "../base_ui/vertical_card";

export default function VerticalCategories() {

  // 筛选不同类型的项目
  const servicesAvailable = projects.filter((p) => p.isDeployed && p.type == "Tri");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="relative mt-6 mb-6 pb-8 pt-10 md:pt-36 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-wrap md:mb-8 justify-start sm:justify-center">
        <h2 className="text-4xl md:text-5xl text-left sm:text-center font-bold">
          Deployed projects
        </h2>
      </div>

      <div
        ref={containerRef}
        className="mx-auto max-w-7xl overflow-x-auto scrollbar-none "
      >

        <div
          id="card-container"
          className="flex flex-nowrap gap-7 md:gap-10 min-w-max px-4 sm:px-10 pb-6 pt-6"
        >
          {servicesAvailable.map((project, i) => (
            <VerticalCard
              key={i}
              title={project.title}
              subtitle={project.subtitle}
              backgroundImage={project.cover || project.cover}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}