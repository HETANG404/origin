"use client"; 

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

type ProfileIconProps = {
  imageUrl: string;
  alt?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function ProfileIcon({
  imageUrl,
  alt = "User Profile",
  className = "",
  href,
  onClick,
}: ProfileIconProps) {
  const baseStyles = clsx(
    "w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer shadow",
    className
  );

  const image = (
    <Image
      src={imageUrl}
      alt={alt}
      width={50}
      height={50}
      className="w-full h-full object-cover block"
    />
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {image}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={baseStyles}>
      {image}
    </div>
  );
}
