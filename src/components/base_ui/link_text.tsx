import React from "react";
import Link from "next/link";
import clsx from "clsx";

type LinkTextProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
};

export default function LinkText({
  children,
  className = "",
  href,
  external = false,
}: LinkTextProps) {
  const baseClasses =
    "text-center p-2 justify-center font-normal leading-tight";
  const combinedClass = clsx(baseClasses, className);
  // 如果有 href，渲染为链接
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link href={href} className={combinedClass}>
          {children}
        </Link>
      );
    }
  }

  return <div className={combinedClass}>{children}</div>;
}