import { DefaultTheme } from "vitepress";
import { generateSidebar } from "../Plugin/generateSidebar";

// Define relative directory paths
const postDir = "../../posts";
const algorithmDir = "../../algorithm";
const projectDir = "../../project";
const efficiencyDir = "../../efficiency";
const flowDir = "../../flow";
const pitDir = "../../pit";

// Define preferred order for sorting
const preferredOrder = [
  "ES6",
  "HTTP",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue",
  "Git",
  "KG",
  "Blog",
  "echarts",
  "算法",
  "设计模式",
  "Leetcode",
  "software",
  "Tools",
  "terminal",
  "踩坑"
]; // Your preferred order

// Function to generate collapsible sidebar items
function generateCollapsibleSidebar(dir: string, preferredOrder: string[]): DefaultTheme.SidebarItem[] {
  const sidebar = generateSidebar(dir, preferredOrder);

  // Make each sidebar group collapsible
  sidebar.forEach(group => {
    (group as DefaultTheme.SidebarGroup).collapsible = true;
    (group as DefaultTheme.SidebarGroup).collapsed = true;
  });

  return sidebar;
}

// Export the sidebar configuration
export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/posts/": generateCollapsibleSidebar(postDir, preferredOrder),
  "/algorithm/": generateCollapsibleSidebar(algorithmDir, preferredOrder),
  "/project/": generateCollapsibleSidebar(projectDir, preferredOrder),
  "/efficiency/": generateCollapsibleSidebar(efficiencyDir, preferredOrder),
  "/flow/": generateCollapsibleSidebar(flowDir, preferredOrder),
  "/pit/": generateCollapsibleSidebar(pitDir, preferredOrder),
};
