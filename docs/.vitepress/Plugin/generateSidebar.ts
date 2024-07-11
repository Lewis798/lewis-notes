/** @format */

import fs from "fs";
import path from "path";
import { DefaultTheme } from "vitepress";

// Function to get the title from a markdown file
function getMarkdownTitle(filePath: string): string {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/title:\s*(.*)/);
  return match ? match[1] : path.basename(filePath, ".md");
}

// Function to generate the sidebar based on the directory and preferred order
export function generateSidebar(dir: string, preferredOrder: string[]): DefaultTheme.SidebarItem[] {
  const sidebar: DefaultTheme.SidebarItem[] = [];

  const absoluteDir = path.resolve(__dirname, dir);

  if (!fs.existsSync(absoluteDir)) {
    console.error(`Directory not found: ${absoluteDir}`);
    return sidebar;
  }

  const folders = fs
    .readdirSync(absoluteDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name !== "images")
    .sort((a, b) => {
      const indexA = preferredOrder.indexOf(a.name);
      const indexB = preferredOrder.indexOf(b.name);

      if (indexA === -1 && indexB === -1) {
        return a.name.localeCompare(b.name);
      } else if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      } else {
        return indexA === -1 ? 1 : -1;
      }
    });

  folders.forEach((folder) => {
    const folderPath = path.join(absoluteDir, folder.name);
    const files = fs.readdirSync(folderPath).filter((file) => file.endsWith(".md"));
    const relativePath = dir.split("/").slice(-1)[0];

    const items = files.map((file) => {
      const filePath = path.join(folderPath, file);
      const title = getMarkdownTitle(filePath);
      return { text: title, link: `/${relativePath}/${folder.name}/${file}` };
    });

    sidebar.push({
      text: folder.name,
      items: items,
    });
  });

  return sidebar;
}
