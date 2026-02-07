import React from "react";
import Link from "next/link";
import clsx from "clsx";

type VerticalCardProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  href?: string; // 加上跳转支持
  className?: string;
};

export default function VerticalCard({
  title,
  backgroundImage,
  href,
  className = "",
}: VerticalCardProps) {
  const content = (
    <div
      className={clsx(
        "w-[260px] h-[325px] relative rounded-[20px] bg-[#a49e9e] bg-cover bg-center overflow-hidden cursor-pointer transition duration-200 hover:scale-[1.02]",
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
      <div className="absolute left-3 right-3 top-3 z-10 inline-flex flex-col justify-start items-center gap-2">
        <div
          className="w-full px-3 py-1 bg-white/70 rounded text-2xl font-bold font-cardtext text-center"
          style={{ color: "#000", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
        >
          {title}
        </div>
      </div>
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
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
