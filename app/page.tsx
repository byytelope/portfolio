import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";
import ListItem from "@/components/ListItem";
import {
  fetchCvLink,
  fetchExperienceData,
  fetchProjectsData,
} from "@/lib/actions";

export default async function Home() {
  const experienceData = await fetchExperienceData();
  const projectsData = await fetchProjectsData();
  const cvLink = await fetchCvLink();

  return (
    <>
      <main className="flex flex-col w-full min-h-[calc(85dvh-6rem)] py-16 pb-32 md:py-24 xl:py-32 gap-8">
        <section className="flex flex-col justify-center gap-8 mb-8">
          <h1 className="tracking-wider text-lg">Mohamed Shadhaan</h1>
          <p>
            I&apos;m a <i>Maldivian</i> student at&nbsp;
            <LinkButton
              href="https://university.taylors.edu.my/"
              title="Taylor's University"
              variant="underlined"
            />
            , completing my Bachelor of Software Engineering with Honors. I have
            a profound passion for all things programming.
          </p>
        </section>
        <section className="flex flex-col justify-center gap-4">
          <div className="flex gap-2">
            <LinkButton href={cvLink.url} title="CV" />
            <LinkButton title="Experience" href="/api/experience" />
          </div>
          <div className="flex flex-col gap-2">
            {experienceData
              .sort((a, b) => a.start_year - b.start_year)
              .map((experience) => (
                <ListItem
                  key={experience.id}
                  title={experience.name}
                  description={experience.description}
                  href={experience.url}
                  trailing={
                    <span className="font-light text-right whitespace-pre-line">
                      {experience.start_year} &mdash;&nbsp;
                      {experience.end_year ?? "Present"}
                    </span>
                  }
                />
              ))}
          </div>
        </section>
        <section className="flex flex-col justify-center gap-4">
          <div className="flex gap-2">
            <LinkButton title="Projects" href="/api/projects" />
          </div>
          <div className="flex flex-col gap-2">
            {projectsData.map((project) => (
              <ListItem
                key={project.id}
                title={project.name}
                description={project.description}
                href={project.url}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
