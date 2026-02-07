import React from "react";
import Link from "next/link";
import clsx from "clsx";

type RedButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function RedButton({
  children,
  className = "",
  href,
  onClick,
}: RedButtonProps) {
  const baseStyles = clsx(
    "w-52 h-[46px] px-2 py-[13px] rounded-lg inline-flex justify-center items-center gap-2.5",
    // 默认背景，但允许外部 className 覆盖
    "bg-[#b60000]",
    className
  );

  const textStyles =
    "text-center justify-center leading-tight";

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        <div className={textStyles}>{children}</div>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      <div className={textStyles}>{children}</div>
    </button>
  );
}