import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectInfo({
  image,
  imageAlt,
  projectInfo,
}: {
  image: StaticImageData;
  imageAlt: string;
  projectInfo: {
    client: string;
    year: string;
    technologies: string[];
    link?: string;
  };
}) {
  return (
    <div>
      <Image
        src={image}
        alt={imageAlt}
        className="rounded-lg"
        layout="responsive"
      />
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 pt-8 pb-2">
        <div>
          <span className="block font-bold text-xl tracking-wider">
            {projectInfo.client}
          </span>
          <span className="block font-mono text-greyBlue">
            {projectInfo.year}
          </span>
          <p className="font-mono text-greyBlue">
            {projectInfo.technologies.join(", ")}
          </p>
        </div>
        {projectInfo.link ? (
          <a
            href={projectInfo.link}
            target="_blank"
            rel="noreferrer"
            className="text-2xl rounded-full h-max w-max p-2 flex justify-center border-2 border-yellow hover:border-offWhite focus:ring-inset"
            aria-label={projectInfo.client}
          >
            <FiExternalLink />
          </a>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
