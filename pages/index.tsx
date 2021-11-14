import About from "../components/About";
import Header from "../components/Header";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div style={{ scrollSnapAlign: "start" }}>
        <Header />
      </div>
      <div style={{ scrollSnapAlign: "start" }}>
        <About />
      </div>
      <div style={{ scrollSnapAlign: "start" }}>
        <TechStack />
      </div>
    </div>
  );
}
