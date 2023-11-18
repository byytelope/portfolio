import BrandsElement from "../components/BrandsElement";

export interface BrandsData {
  name: string;
  description: string;
  url: string;
  startYear: string;
  endYear?: string;
  logoUrl: string;
}

export default function Brands() {
  const brandsData: BrandsData[] = [
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

  return (
    <section className="flex flex-col justify-center gap-4">
      <h2 className="text-stone-400 dark:text-stone-600 text-md">/brands</h2>
      <div className="flex flex-col divide-y divide-stone-200 dark:divide-stone-800">
        {brandsData.map((brand) => (
          <BrandsElement key={brand.url + brand.name} brandData={brand} />
        ))}
      </div>
    </section>
  );
}
