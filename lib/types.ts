export interface ExperienceData {
  id: string;
  name: string;
  description: string;
  url?: string;
  start_year: number;
  end_year?: number;
}

export interface ProjectsData {
  id: string;
  name: string;
  description: string;
  url?: string;
}

export const CacheTags = {
  cvLink: "cv-link",
  experienceData: "experience-data",
  projectsData: "projects-data",
} as const;

export type CacheTag = (typeof CacheTags)[keyof typeof CacheTags];
