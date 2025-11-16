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
  slug: string;
  url?: string;
  detail: string;
}
