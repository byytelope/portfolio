import TypewriterComponent from "typewriter-effect";

export default function About() {
  return (
    <div className="flex flex-col justify-start md:justify-center md:h-screen py-16 md:py-0 w-full">
      <div className="flex w-full pb-4">
        <TypewriterComponent
          onInit={(tw) => {
            tw.typeString("about me;").start();
          }}
          options={{
            wrapperClassName: "text-xl font-mono text-aqua",
            delay: 70,
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <p className="flex-1 pr-8 text-lg xs:text-xl tracking-wider md:text-justify text-greyBlue">
          I have always been interested in computers and the software side of
          their inner-workings. So, when covid-19 came around and I needed to
          find a hobby, it was natural for me to jump straight into coding. I
          had chosen <span className="text-offWhite font-mono">Python</span> as
          my starting point, but just a few months later, the perfect
          opportunity came up for me to take up web development, as a couple of
          my close friends needed a website for their startup café. Fast-forward
          to today, I am now comfortably proficient in{" "}
          <span className="text-offWhite font-mono">
            Node.js, Deno, React, Next.js,
          </span>{" "}
          and even <span className="text-offWhite font-mono">Flutter</span>
        </p>
        <div className="flex w-full lg:w-72 h-72 bg-darkblue mt-8 lg:mt-0" />
      </div>
    </div>
  );
}
