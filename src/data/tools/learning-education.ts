import { Tool } from "../types";

const CATEGORY = "learning-education";

export const learningEducation: Tool[] = [
  {
    name: "Oboe",
    slug: "oboe",
    category: CATEGORY,
    subcategory: "AI Tutors & Personalized Learning",
    whatItDoes:
      "Creates structured learning journeys with explanations, questions, quizzes, study materials and visual learning aids.",
    access: "Freemium",
    platforms: ["Web"],
    website: "https://oboe.com",
    lastVerified: "2026-08-15",
    testStatus: "tested",
    testNote: {
      verdict:
        "Excellent dedicated learning AI. It structures learning systematically, maintains learning context well and provides an academic-style learning experience.",
      bestFor: "Learning a subject systematically from fundamentals upward.",
      caution:
        "Its academic/textbook style is not always ideal when I want a quicker, more conversational answer rather than a structured lesson.",
    },
  },
];
