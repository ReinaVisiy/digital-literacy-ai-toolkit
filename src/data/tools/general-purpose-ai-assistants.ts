import { Tool } from "../types";

const CATEGORY = "general-purpose-ai-assistants";

export const generalPurposeAiAssistants: Tool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: CATEGORY,
    subcategory: "Conversational & Multimodal",
    whatItDoes:
      "General AI assistant for conversation, writing, learning, images, files and other tasks.",
    access: "Freemium",
    platforms: ["Web", "iOS", "Android", "Desktop"],
    website: "https://openai.com/chatgpt",
    lastVerified: "2026-08-15",
    testStatus: "tested",
    testNote: {
      verdict: "Strong general-purpose assistant.",
      bestFor:
        "Broad everyday AI work across learning, writing, research assistance, planning and other tasks.",
      caution:
        "In my experience, the free version occasionally produces inaccurate information. Responses can also be more elaborate or dramatic than the task requires, so specifying tone and length helps.",
    },
  },
  {
    name: "Claude",
    slug: "claude",
    category: CATEGORY,
    subcategory: "Conversational & Multimodal",
    whatItDoes:
      "General AI assistant for writing, reasoning, coding, analysis and project-based work.",
    access: "Freemium",
    platforms: ["Web", "iOS", "Android", "Desktop"],
    website: "https://claude.com",
    lastVerified: "2026-08-15",
    testStatus: "tested",
    testNote: {
      verdict:
        "My strongest general-purpose experience so far. Its writing and conversation feel particularly natural and human-like.",
      bestFor: "Explaining ideas, writing and longer back-and-forth work.",
      caution: "I have not yet explored its full capability range.",
    },
  },
  {
    name: "DeepSeek",
    slug: "deepseek",
    category: CATEGORY,
    subcategory: "Alternative General-Purpose",
    whatItDoes: "General conversation, reasoning, problem-solving and coding.",
    access: "Free",
    platforms: ["Web", "iOS", "Android"],
    website: "https://deepseek.com",
    lastVerified: "2026-08-15",
    testStatus: "not_tested",
  },
  {
    name: "Duck.ai",
    slug: "duck-ai",
    category: CATEGORY,
    subcategory: "Privacy-Focused",
    whatItDoes: "Private access to several AI models through DuckDuckGo.",
    access: "Freemium",
    platforms: ["Web"],
    website: "https://duck.ai",
    lastVerified: "2026-08-15",
    testStatus: "not_tested",
  },
  {
    name: "Gemini",
    slug: "gemini",
    category: CATEGORY,
    subcategory: "Conversational & Multimodal",
    whatItDoes:
      "Google's general AI assistant with integration across the Google ecosystem.",
    access: "Freemium",
    platforms: ["Web", "iOS", "Android"],
    website: "https://gemini.google.com",
    lastVerified: "2026-08-15",
    testStatus: "tested",
    testNote: {
      verdict:
        "Useful general assistant, but inconsistent across longer multi-turn work in my testing.",
      bestFor:
        "General assistance, particularly for users working within Google's ecosystem.",
      caution:
        "Follow-up responses have sometimes become weaker or lost important context during my testing. I have not tested the paid version.",
    },
  },
  {
    name: "Grok",
    slug: "grok",
    category: CATEGORY,
    subcategory: "Conversational & Multimodal",
    whatItDoes:
      "General AI assistant with real-time web/X information, voice and media capabilities.",
    access: "Freemium",
    platforms: ["Web", "iOS", "Android"],
    website: "https://grok.com",
    lastVerified: "2026-08-15",
    testStatus: "tested",
    testNote: {
      verdict: "Useful for current/general information.",
      bestFor: "Exploring current information and discussions.",
      caution:
        "During my testing, I encountered weak or X-derived sourcing where stronger academic evidence would have been preferable. Verify sources carefully for academic use.",
    },
  },
  {
    name: "Kimi",
    slug: "kimi",
    category: CATEGORY,
    subcategory: "Alternative / Agentic",
    whatItDoes: "Chat, documents, slides, spreadsheets, coding and agent-style tasks.",
    access: "Freemium",
    platforms: ["Web", "Mobile app"],
    website: "https://kimi.com",
    lastVerified: "2026-08-15",
    testStatus: "not_tested",
  },
  {
    name: "Meta AI",
    slug: "meta-ai",
    category: CATEGORY,
    subcategory: "Conversational & Multimodal",
    whatItDoes: "General AI assistant integrated across Meta's apps and services.",
    access: "Free",
    platforms: ["Web", "Facebook", "Instagram", "WhatsApp", "Messenger", "Supported devices"],
    website: "https://meta.ai",
    lastVerified: "2026-08-15",
    testStatus: "tested",
    testNote: {
      verdict: "Convenient for casual conversation and everyday questions.",
      bestFor: "Quick general assistance within apps people already use.",
      caution:
        "It has not been my preferred option for rigorous academic or research-oriented work.",
    },
  },
  {
    name: "Poe",
    slug: "poe",
    category: CATEGORY,
    subcategory: "Multi-Model Platforms",
    whatItDoes:
      "Access to models from many providers plus community bots and media-generation tools.",
    access: "Freemium",
    platforms: ["Web", "iOS", "Android", "Mac", "Windows"],
    website: "https://poe.com",
    lastVerified: "2026-08-15",
    testStatus: "not_tested",
  },
  {
    name: "Qwen",
    slug: "qwen",
    category: CATEGORY,
    subcategory: "Alternative General-Purpose",
    whatItDoes:
      "General conversation, reasoning, writing, coding, mathematics and multilingual tasks.",
    access: "Not Verified",
    platforms: ["Web", "Mobile app"],
    website: "https://chat.qwen.ai",
    lastVerified: "2026-08-15",
    testStatus: "not_tested",
  },
  {
    name: "Vibe (Mistral)",
    slug: "vibe-mistral",
    category: CATEGORY,
    subcategory: "Alternative / Agentic",
    whatItDoes:
      "General chat, work automation and coding, combining assistant and agent functions.",
    access: "Freemium",
    platforms: ["Web", "Mobile", "VS Code", "JetBrains", "Zed", "CLI"],
    website: "https://mistral.ai/products/vibe",
    lastVerified: "2026-08-15",
    testStatus: "not_tested",
  },
  {
    name: "You.com",
    slug: "you-com",
    category: CATEGORY,
    subcategory: "Multi-Model / Research",
    whatItDoes: "Web-connected AI answers, research and access to multiple models.",
    access: "Freemium",
    platforms: ["Web"],
    website: "https://you.com",
    lastVerified: "2026-08-15",
    testStatus: "not_tested",
  },
];
