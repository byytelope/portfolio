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
          <LinkButton
            href="https://university.taylors.edu.my/"
            title="Taylor's University"
            variant="underlined"
          />
          , completing my Bachelor of Software Engineering with Honors. I have a
          profound passion for all things programming.
        </p>
      </section>

      <section className="flex flex-col justify-center gap-4">
        <div className="flex gap-2">
          <LinkButton href={cvLink.url} title="CV" />
          <LinkButton title="Experience" href="/api/experience" />
        </div>
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
