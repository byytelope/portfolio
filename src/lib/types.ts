export interface ExperienceData {
  id: string;
  name: string;
  description: string;
  url?: string;
  startYear: number;
  endYear?: number;
}

export interface ProjectsData {
  id: string;
  name: string;
  description: string;
  slug: string;
  url?: string;
  detail: string;
}

export const CacheTags = {
  ExperienceData: { title: "Experience Data", tag: "experience_data" },
  ProjectsData: { title: "Projects Data", tag: "projects_data" },
  CvLink: { title: "CV Link", tag: "cv_link" },
} as const;
