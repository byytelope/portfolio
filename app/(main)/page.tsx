import LinkButton from "@/components/LinkButton";
import ListItem from "@/components/ListItem";
import { fetchCvLink, fetchExperienceData } from "@/lib/actions";

export default async function Home() {
  const experienceData = await fetchExperienceData();
  const cvLink = await fetchCvLink();

  return (
    <>
      <section className="flex flex-col justify-center gap-8 mb-8">
        <h1 className="tracking-wider font-medium text-xl">Mohamed Shadhaan</h1>
        <p>
          I&apos;m a <i>Maldivian</i> student at&nbsp;
          <a
            href="https://university.taylors.edu.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Taylor&apos;s University
          </a>
          , completing my Bachelor of Software Engineering with Honors. I have a
          profound passion for all things programming.
        </p>
      </section>

      <section className="flex flex-col justify-center gap-4">
        <LinkButton href={cvLink.url} title="CV" />
        <h2 className="flex items-center">
          <LinkButton title="GET" href="/api/experience" />
          <span className="text-stone-400 dark:text-stone-600 text-md">
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
