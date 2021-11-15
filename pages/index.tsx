import HomeSection from "../components/common/HomeSection";
import About from "../components/home/About";
import Employers from "../components/home/Employers";
import Header from "../components/home/Header";
import TechStack from "../components/home/TechStack";

const sectionsArray = [
  { component: About, title: "about me" },
  { component: TechStack, title: "my tech stack" },
  { component: Employers, title: "where i've worked" },
];

const sections = sectionsArray.map((section, i) => {
  return (
    <HomeSection key={section.title + i.toString()} title={section.title}>
      {section.component()}
    </HomeSection>
  );
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Header />
      {sections}
    </div>
  );
}
