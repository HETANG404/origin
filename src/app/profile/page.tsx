import { notFound } from "next/navigation";
import { getMarkdownContent } from "@/lib/getMarkdown";
import ProfileContent from "./profile_content";

export const metadata = {
  title: "Origin-Tang",
  description: "Page description",
};

export default async function Page() {
  const htmlContent = await getMarkdownContent("TANG_profile.md");
  if (!htmlContent) return notFound();

  return <ProfileContent htmlContent={htmlContent} />;
}
