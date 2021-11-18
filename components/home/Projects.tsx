import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectInfo from "../ProjectInfo";
import tchaImage from "../../public/tcha.png";

import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const projectsData = [
  {
    client: "The Coffee House Addu",
    year: "2020",
    technologies: ["React", "Tailwindcss"],
    image: tchaImage,
    link: "https://thecoffeehouseaddu.vercel.app",
  },
  {
    client: "The Coffee House Addu",
    year: "2020",
    technologies: ["React", "Tailwindcss"],
    image: tchaImage,
    link: "https://thecoffeehouseaddu.vercel.app",
  },
  {
    client: "The Coffee House Addu",
    year: "2020",
    technologies: ["React", "Tailwindcss"],
    image: tchaImage,
    link: "https://thecoffeehouseaddu.vercel.app",
  },
];

const swipers = projectsData.map((project, i) => {
  return (
    <SwiperSlide
      key={project.client + i.toString()}
      style={{
        WebkitTransform: "translate3d(0, 0, 0)",
      }}
    >
      <ProjectInfo
        image={project.image}
        imageAlt={project.client}
        projectInfo={{
          client: `${project.client} (${i + 1}/${projectsData.length})`,
          year: project.year,
          technologies: project.technologies,
          link: project.link,
        }}
      />
    </SwiperSlide>
  );
});

export default function Projects({ inView }: { inView: boolean }) {
  return (
    <div>
      {inView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            spaceBetween={32}
            speed={700}
            className="rounded-lg"
          >
            {swipers}
          </Swiper>
        </motion.div>
      ) : (
        <div className="min-h-full" />
      )}
    </div>
  );
}
