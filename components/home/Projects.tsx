// import { Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import ProjectInfo from "../ProjectInfo";
// import tchaImage from "../../data/tcha.png";

// import "swiper/css";
// import "swiper/css/autoplay";

// const projectsData = [
//   {
//     client: "The Coffee House Addu",
//     year: "2020",
//     technologies: ["React", "Tailwindcss"],
//     image: tchaImage,
//     link: "https://thecoffeehouseaddu.vercel.app",
//   },
//   {
//     client: "The Coffee House Addu",
//     year: "2020",
//     technologies: ["React", "Tailwindcss"],
//     image: tchaImage,
//     link: "https://thecoffeehouseaddu.vercel.app",
//   },
//   {
//     client: "The Coffee House Addu",
//     year: "2020",
//     technologies: ["React", "Tailwindcss"],
//     image: tchaImage,
//     link: "https://thecoffeehouseaddu.vercel.app",
//   },
// ];

// const swipers = projectsData.map((project) => {
//   return (
//     <SwiperSlide key={project.client}>
//       <ProjectInfo
//         image={project.image}
//         imageAlt={project.client}
//         projectInfo={{
//           client: project.client,
//           year: project.year,
//           technologies: project.technologies,
//           link: project.link,
//         }}
//       />
//     </SwiperSlide>
//   );
// });

export default function Projects() {
  return (
    <div>
      {/* <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }}>
        {swipers}
      </Swiper> */}
    </div>
  );
}
