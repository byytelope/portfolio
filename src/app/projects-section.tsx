import { LinkButton } from "@/components/ui/link-button";
import { ListItem } from "@/components/ui/list-item";
import { fetchProjectsData } from "@/lib/actions";

export const ProjectsSection = async () => {
  const projectsData = await fetchProjectsData();

  return (
    <section className="flex flex-col justify-center gap-4">
      <LinkButton title="Projects" href="/api/projects" prefetch={false} />
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
  );
};
