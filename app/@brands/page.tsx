import WorkElement from "../components/BrandsElement";

export interface BrandsData {
  name: string;
  description: string;
  startYear: string;
  endYear?: string;
  logoUrl: string;
}

export default function Brands() {
  const brandsData: BrandsData[] = [
    {
      name: "The Coffee House Addu",
      description: "Web Dev",
      startYear: "2020",
      endYear: "2021",
      logoUrl: "",
    },
    {
      name: "Verticoda Studios",
      description: "Web Dev",
      startYear: "2021",
      endYear: "2022",
      logoUrl: "",
    },
    {
      name: "Curated Salad",
      description: "Lead Dev for Website",
      startYear: "2021",
      logoUrl: "",
    },
  ];

  return (
    <section className="flex flex-col justify-center gap-4">
      <h2 className="text-stone-400 dark:text-stone-600 text-md">/work</h2>
      <div className="flex flex-col divide-y divide-stone-200 dark:divide-stone-800">
        {brandsData.map((brand) => (
          <WorkElement key={brand.logoUrl + brand.name} brandData={brand} />
        ))}
      </div>
    </section>
  );
}
