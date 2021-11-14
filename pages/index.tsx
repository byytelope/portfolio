import About from "../components/About";
import Employers from "../components/Employers";
import Header from "../components/Header";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div style={{ scrollSnapAlign: "start" }}>
        <Header />
      </div>
      <div style={{ scrollSnapAlign: "start" }} className="w-full">
        <About />
      </div>
      <div style={{ scrollSnapAlign: "start" }} className="w-full">
        <TechStack />
      </div>
      <div style={{ scrollSnapAlign: "start" }} className="w-full">
        <Employers />
      </div>
    </div>
  );
}
