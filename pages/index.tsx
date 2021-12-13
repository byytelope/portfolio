import { useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { NextPage } from "next";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Brands from "../components/home/Brands";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HomeSection from "../components/home/HomeSection";
import Projects from "../components/home/Projects";
import TechStack from "../components/home/TechStack";

const Home: NextPage = () => {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [techStackRef, techStackInView] = useInView({ triggerOnce: true });
  const [brandsRef, brandsInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });
  const contactScrollRef = useRef<null | HTMLDivElement>(null);

  const setContactRefs = useCallback(
    (node) => {
      contactScrollRef.current = node;
      contactRef(node);
    },
    [contactRef]
  );

  const sectionsArray = [
    {
      component: (
        <div ref={aboutRef}>
          <About />
        </div>
      ),
      title: "about me",
      inView: aboutInView,
    },
    {
      component: (
        <div ref={techStackRef}>
          <TechStack />
        </div>
      ),
      title: "my tech stack",
      inView: techStackInView,
    },
    {
      component: (
        <div ref={brandsRef}>
          <Brands />
        </div>
      ),
      title: "brands i have worked with",
      inView: brandsInView,
    },
    {
      component: (
        <div ref={projectsRef}>
          <Projects inView={projectsInView} />
        </div>
      ),
      title: "stuff i have made",
      inView: projectsInView,
    },
    {
      component: (
        <div ref={setContactRefs}>
          <Contact />
        </div>
      ),
      title: "say hi(re me!)",
      inView: contactInView,
    },
  ];

  const sections = sectionsArray.map((section, i) => {
    return (
      <HomeSection
        key={section.title + i.toString()}
        title={section.title}
        showTitle={section.inView}
      >
        {section.component}
      </HomeSection>
    );
  });

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Header contactsRef={contactScrollRef} />
      {sections}
      <Footer />
    </main>
  );
};

export default Home;
