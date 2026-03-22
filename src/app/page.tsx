import { Suspense } from "react";

import { Footer } from "@/components/ui/footer";
import { HomeSection } from "@/components/ui/home-section";
import { LinkButton } from "@/components/ui/link-button";
import { fetchExperienceData, fetchProjectsData } from "@/lib/actions";

export default async function Home() {
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

        <Suspense>
          <HomeSection
            promise={fetchExperienceData}
            title="Experience"
            link="/api/experience"
            trailing={(data) => (
              <span className="font-light text-right whitespace-pre-line">
                {data.startYear}&nbsp;&mdash;&nbsp;
                {data.endYear ?? "Present"}
              </span>
            )}
          />
        </Suspense>

        <Suspense>
          <HomeSection
            promise={fetchProjectsData}
            title="Projects"
            link="/api/projects"
            trailing={(data) => (
              <span className="font-light text-right whitespace-pre-line">
                {data.detail}
              </span>
            )}
          />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
