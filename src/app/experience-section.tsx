import { LinkButton } from "@/components/ui/link-button";
import { ListItem } from "@/components/ui/list-item";
import { fetchExperienceData } from "@/lib/actions";

export const ExperienceSection = async () => {
  const experienceData = await fetchExperienceData();

  return (
    <section className="flex flex-col justify-center gap-4">
      <LinkButton title="Experience" href="/api/experience" prefetch={false} />
      <div className="flex flex-col gap-2">
        {experienceData.map((experience) => (
          <ListItem
            key={experience.id}
            title={experience.name}
            description={experience.description}
            href={experience.url}
            trailing={
              <span className="font-light text-right whitespace-pre-line">
                {experience.startYear} &mdash;&nbsp;
                {experience.endYear ?? "Present"}
              </span>
            }
          />
        ))}
      </div>
    </section>
  );
};
