"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

type HorizontalCardProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  href?: string;
  className?: string;
};

export default function HorizontalCard({
  title,
  subtitle,
  backgroundImage,
  href,
  className = "",
}: HorizontalCardProps) {
  const content = (
    <div
      className={clsx(
        "w-[275px] h-[220px] relative rounded-[20px] bg-[#a49e9e] bg-cover bg-center overflow-hidden cursor-pointer transition duration-200 hover:scale-[1.02]",
        className
      )}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
      <div className="w-[251px] left-[12px] top-[14px] absolute z-10 inline-flex flex-col justify-start items-center gap-2">
        <div
          className="self-stretch justify-start text-2xl font-bold font-cardtext bg-white/70 px-2 py-1 rounded"
          style={{ color: "#000", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
        >
          {title}
        </div>
        <div
          className="self-stretch h-7 flex items-center text-[20px] font-bold font-cardtext bg-white/70 px-2 rounded"
          style={{ color: "#000", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );

  const isExternal = href?.startsWith("http");
  if (href) {
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href}>{content}</Link>
    );
  }

  return content;
}
