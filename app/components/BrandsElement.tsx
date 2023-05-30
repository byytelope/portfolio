import Image from "next/image";
import { BrandsData } from "../@brands/page";

export default function BrandsElement({
  brandData,
}: {
  brandData: BrandsData;
}) {
  return (
    <div>
      <div className="flex gap-4 p-2 hover:bg-stone-200 dark:hover:bg-stone-800 transition duration-300 rounded-md">
        <div className="relative h-12 w-12 flex flex-shrink-0">
          <Image
            src={"/curatedsalad.png"}
            alt={brandData.name + " Logo"}
            fill
            className="rounded bg-amber-300 dark:bg-amber-500 shadow-md shadow-amber-300/50 dark:shadow-amber-700/20"
          />
        </div>
        <div className="flex flex-col w-full md:w-fit">
          <span>{brandData.name}</span>
          <span className="text-stone-500">{brandData.description}</span>
        </div>
        <div className="flex ml-auto text-stone-500 items-center font-light text-right">
          <span>
            {brandData.startYear} &mdash;&nbsp;
            {brandData.endYear ?? "Present"}
          </span>
        </div>
      </div>
    </div>
  );
}
