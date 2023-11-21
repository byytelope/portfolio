export interface BrandsData {
  name: string;
  description: string;
  url: string;
  startYear: string;
  endYear?: string;
  logoUrl: string;
}

export const brandsData: BrandsData[] = [
  {
    name: "The Coffee House Addu",
    description: "Web Dev",
    url: "https://thecoffeehouseaddu.vercel.app",
    startYear: "2020",
    endYear: "2021",
    logoUrl: "",
  },
  {
    name: "Verticoda Studios",
    description: "Web Dev",
    url: "https://verticoda-studios.vercel.app",
    startYear: "2021",
    endYear: "2022",
    logoUrl: "",
  },
  {
    name: "Curated Salad",
    description: "Lead Dev for Website",
    url: "https://curatedsalad.vercel.app",
    startYear: "2021",
    endYear: "2022",
    logoUrl: "",
  },
];
