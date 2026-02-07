// app/profile/ProfileContent.tsx
"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import desktopStyles from "@/styles/profile-markdown.module.css";
import mobileStyles from "@/styles/profile-markdown.mobile.module.css";
import LinkText from "@/components/base_ui/link_text";

export default function ProfileContent({ htmlContent }: { htmlContent: string }) {
  const isMobile = useIsMobile();
  const styles = isMobile ? mobileStyles : desktopStyles;

  return (
    <article className="prose prose-neutral mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-2">MA MINGYANG</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—— Jastin Tang Alin
      </h2>

      <div className="flex flex-col mt-20 mb-10 mx-auto">
        <LinkText
          href="https://github.com/HETANG404"
          className="bg-transparent text-blue-600 underline hover:text-blue-800 text-lg md:text-xl text-left"
        >
          <span className="inline md:hidden">Github &gt;&gt;&gt;</span>
          <span className="hidden md:inline">
            Github:&nbsp; https://github.com/HETANG404
          </span>
        </LinkText>

        <LinkText
          href="https://www.linkedin.com/in/mingyang-ma-039a3731b"
          className="bg-transparent text-blue-600 underline hover:text-blue-800 text-lg md:text-xl text-left"
        >
          <span className="inline md:hidden">LinkIn &gt;&gt;&gt;</span>
          <span className="hidden md:inline">
            LinkIn:&nbsp;&nbsp; https://www.linkedin.com/in/mingyang-ma-039a3731b
          </span>
        </LinkText>

      </div>

      <div className={`prose ${styles.markdownProse}`}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>

      <div className="mb-36" />
    </article>
  );
}
