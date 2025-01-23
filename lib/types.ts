export interface ExperienceData {
  id: string;
  name: string;
  description: string;
  url: string;
  startyear: string;
  endyear?: string;
}

export const CacheTags = {
  cvLink: "cv-link",
  experienceData: "experience-data",
} as const;

export type CacheTag = (typeof CacheTags)[keyof typeof CacheTags];
