export type PortfolioType = {
  slug: string;
  title: string;
  summary: string;
  images: string[];
  technologies: string[];
  status: "archived" | "on-hold" | "active";
  demoUrl?: string;
  githubUrl?: string;
};
