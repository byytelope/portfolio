export interface HomeData {
  id: string;
  name: string;
  description: string;
  url?: string;
}

export interface ExperienceData extends HomeData {
  startYear: number;
  endYear?: number;
}

export interface ProjectsData extends HomeData {
  slug: string;
  detail: string;
}

export const CacheTags = {
  ExperienceData: { title: "Experience Data", tag: "experience_data" },
  ProjectsData: { title: "Projects Data", tag: "projects_data" },
  CvLink: { title: "CV Link", tag: "cv_link" },
} as const;
