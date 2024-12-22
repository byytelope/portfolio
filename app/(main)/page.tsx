import { sql } from "@vercel/postgres";
import Link from "next/link";

import ListItem from "@/app/_components/ListItem";
import { ExperienceData } from "@/app/_lib/types";

export default async function Home() {
  const { rows: experienceData }: { rows: ExperienceData[] } =
    await sql`SELECT * FROM experience_data`;

  return (
    <>
      <section className="flex flex-col justify-center gap-8 mb-8">
        <h1 className="tracking-wider font-medium text-xl text-stone-600 dark:text-stone-400">
          Mohamed Shadhaan
        </h1>
        <p>
          I&apos;m a <i>Maldivian</i> student at&nbsp;
          <a
            className="underline"
            href="https://university.taylors.edu.my/"
            target="_blank"
            rel="external"
          >
            Taylor&apos;s University
          </a>
          , completing my Bachelor of Software Engineering with Honors. I have a
          profound passion for all things programming.
        </p>
      </section>

      <section className="flex flex-col justify-center gap-4">
        <h2 className="flex w-full justify-between">
          <span className="text-stone-400 dark:text-stone-600 text-md">
            <Link className="underline" href="/api/cv">
              GET
            </Link>
            &nbsp;/api/cv
          </span>
        </h2>
      </section>

      <section className="flex flex-col justify-center gap-4">
        <h2 className="flex w-full justify-between">
          <span className="text-stone-400 dark:text-stone-600 text-md">
            <Link className="underline" href="/api/experience">
              GET
            </Link>
            &nbsp;/api/experience
          </span>
        </h2>
        <div className="flex flex-col gap-2">
          {experienceData.map((brand) => (
            <ListItem
              key={brand.url + brand.name}
              title={brand.name}
              description={brand.description}
              href={brand.url}
              trailing={
                <span className="font-light text-right whitespace-pre-line">
                  {brand.startyear} &mdash;&nbsp;{brand.endyear ?? "Present"}
                </span>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
