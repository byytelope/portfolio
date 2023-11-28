import { BrandsData } from "@/app/_lib/db";

export default function BrandsElement({
  brandData,
}: {
  brandData: BrandsData;
}) {
  return (
    <div>
      {/* Redundant div to fix divide radius */}
      <a
        href={brandData.url}
        target="_blank"
        className="flex gap-4 py-2 px-3 hover:bg-stone-200 dark:hover:bg-stone-800 transition duration-300 rounded-md"
      >
        <div className="flex flex-col w-full md:w-fit">
          <span>{brandData.name}</span>
          <span className="text-stone-400">{brandData.description}</span>
        </div>
        <div className="flex ml-auto items-center font-light text-right">
          <span>
            {brandData.startyear} &mdash;&nbsp;
            {brandData.endyear ?? "Present"}
          </span>
        </div>
      </a>
    </div>
  );
}
