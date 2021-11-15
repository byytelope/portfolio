import { useRef } from "react";
import HomeSection from "../components/common/HomeSection";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Employers from "../components/home/Employers";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Projects from "../components/home/Projects";
import TechStack from "../components/home/TechStack";

export default function Home() {
  const contactsRef = useRef<null | HTMLDivElement>(null);
  const sectionsArray = [
    { component: <About />, title: "about me" },
    { component: <TechStack />, title: "my tech stack" },
    { component: <Employers />, title: "where i've worked" },
    { component: <Projects />, title: "stuff i've made" },
    {
      component: (
        <div ref={contactsRef}>
          <Contact />
        </div>
      ),
      title: "say hi(re me!)",
    },
  ];

  const sections = sectionsArray.map((section, i) => {
    return (
      <HomeSection key={section.title + i.toString()} title={section.title}>
        {section.component}
      </HomeSection>
    );
  });

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Header contactsRef={contactsRef} />
      {sections}
      <Footer />
    </main>
  );
}
