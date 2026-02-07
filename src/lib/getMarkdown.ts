import path from "path";
import { readFile } from "fs/promises";
import { marked } from "marked";

export async function getMarkdownContent(filename: string) {
  try {
    const markdownPath = path.join(process.cwd(), "public", "markdowns", filename);
    const markdownText = await readFile(markdownPath, "utf-8");
    const html = await marked.parse(markdownText);
    return html;
  } catch (err) {
    console.error("读取 markdown 出错:", err);
    return null;
  }
}
