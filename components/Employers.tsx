import TypewriterComponent from "typewriter-effect";

export default function Employers() {
  return (
    <div className="flex flex-col justify-start md:justify-center md:h-screen py-16 md:py-0 w-full">
      <div className="flex w-full pb-4">
        <TypewriterComponent
          onInit={(tw) => {
            tw.typeString("where i've worked;").start();
          }}
          options={{
            wrapperClassName: "text-xl font-mono text-aqua",
            delay: 70,
          }}
        />
      </div>
      <div className="flex"></div>
    </div>
  );
}
