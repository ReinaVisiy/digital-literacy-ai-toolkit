export type AccessType =
  | "Free"
  | "Freemium"
  | "Paid"
  | "Open Source"
  | "Not Verified";

export type AccessBadge = "Free for students" | "Student discount" | "Free trial";

export type TestStatus = "tested" | "testing" | "not_tested";

export interface TestNote {
  verdict: string;
  bestFor: string;
  caution: string;
  standoutFeature?: string;
}

export interface Tool {
  name: string;
  slug: string;
  category: string; // category slug
  subcategory: string;
  whatItDoes: string;
  access: AccessType;
  accessBadges?: AccessBadge[];
  platforms: string[];
  website: string;
  lastVerified: string; // YYYY-MM-DD
  testStatus: TestStatus;
  testNote?: TestNote;
  verificationSources?: string[];
}

export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  subcategories: string[];
  comingSoon: boolean;
}

export interface QuickStartOption {
  title: string;
  description: string;
  categorySlug?: string;
  icon: string; // lucide icon name
}
