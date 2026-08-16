import { Tool } from "../types";
import { generalPurposeAiAssistants } from "./general-purpose-ai-assistants";
import { learningEducation } from "./learning-education";

// New categories add a data file + one line here — no component changes needed.
export const allTools: Tool[] = [...generalPurposeAiAssistants, ...learningEducation];

export function getToolsByCategory(categorySlug: string): Tool[] {
  return allTools.filter((t) => t.category === categorySlug);
}

export function getFeaturedTools(): Tool[] {
  return allTools.filter((t) => t.testStatus === "tested").slice(0, 4);
}
