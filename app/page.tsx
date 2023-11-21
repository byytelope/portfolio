import { brandsData } from "@/utils/brandsData";
import BrandsElement from "@/app/components/BrandsElement";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center gap-8">
        <h1 className="tracking-wider font-medium text-xl text-stone-600 dark:text-stone-400">
          Mohamed Shadhaan
        </h1>
        <p className="text-stone-500">
          I&apos;m a student at Taylor&apos;s University, completing my Bachelor
          of Software Engineering with Honors. I have a profound passion for web
          dev and all things programming.
        </p>
      </section>

      <section className="flex flex-col justify-center gap-4">
        <h2 className="text-stone-400 dark:text-stone-600 text-md">/brands</h2>
        <div className="flex flex-col divide-y divide-stone-200 dark:divide-stone-800">
          {brandsData.map((brand) => (
            <BrandsElement key={brand.url + brand.name} brandData={brand} />
          ))}
        </div>
      </section>
    </>
  );
}
