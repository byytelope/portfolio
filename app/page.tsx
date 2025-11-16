import { cacheTag } from "next/cache";

import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/LinkButton";
import { ListItem } from "@/components/ListItem";
import {
  fetchCvLink,
  fetchExperienceData,
  fetchProjectsData,
} from "@/lib/actions";

export default async function Home() {
  "use cache";
  cacheTag("home");

  const experienceData = await fetchExperienceData();
  const projectsData = await fetchProjectsData();
  const cvLink = await fetchCvLink();

  return (
    <>
      <main className="flex flex-col w-full min-h-[calc(85dvh-6rem)] py-16 pb-32 md:py-24 gap-8">
        <section className="flex flex-col justify-center gap-8 mb-8">
          <h1 className="tracking-wider text-lg">{"Mohamed Shadhaan"}</h1>
          <p>
            {"Hi there! I'm a software engineer from "}
            <LinkButton
              title="the Maldives"
              href="https://maps.app.goo.gl/eUyRHAyPGMFgqL4k9"
              variant="underlined"
            />
            {". I have a profound passion for all things programming."}
          </p>
        </section>

        <section className="flex flex-col justify-center gap-4">
          <LinkButton title="Experience" href="/api/experience" />
          <div className="flex flex-col gap-2">
            {experienceData.map((experience) => (
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
          <LinkButton title="Projects" href="/api/projects" />
          <div className="flex flex-col gap-2">
            {projectsData.map((project) => (
              <ListItem
                key={project.id}
                title={project.name}
                description={project.description}
                href={project.url}
                trailing={
                  <span className="font-light text-right whitespace-pre-line">
                    {project.detail}
                  </span>
                }
              />
            ))}
          </div>
        </section>
      </main>

      <Footer cvLink={cvLink.url} />
    </>
  );
}
