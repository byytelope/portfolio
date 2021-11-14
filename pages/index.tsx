import About from "../components/About";
import Employers from "../components/Employers";
import Header from "../components/Header";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Header />
      <About />
      <TechStack />
      <Employers />
    </div>
  );
}
