import TypewriterComponent from "typewriter-effect";

export default function About() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex w-full pb-4">
        <TypewriterComponent
          onInit={(tw) => {
            tw.typeString("about me").start();
          }}
          options={{
            wrapperClassName: "text-xl font-mono text-aqua",
            delay: 70,
          }}
        />
      </div>
      <div className="flex">
        <p className="flex-1 pr-8 text-xl tracking-wider text-justify text-greyBlue">
          I have always been interested in computers and the software side of
          their inner-workings. So, when covid-19 came around and I needed to
          find a hobby, it was natural for me to jump straight into coding. I
          had chosen{" "}
          <a
            className="font-mono underline text-aqua"
            href="https://python.org"
            target="_blank"
            rel="noreferrer"
          >
            python
          </a>{" "}
          as my starting point, but just a few months later, the perfect
          opportunity came up for me to take up web development, as a couple of
          my close friends needed a website for their startup café. Fast-forward
          to today, I am now comfortably proficient in{" "}
          <span className="font-mono text-aqua">
            <a
              className="underline"
              href="https://nodejs.org"
              target="_blank"
              rel="noreferrer"
            >
              node.js
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://deno.land"
              target="_blank"
              rel="noreferrer"
            >
              Deno
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://reactjs.org"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
            >
              Next.js
            </a>
          </span>{" "}
          and even{" "}
          <a
            className="font-mono underline text-aqua"
            href="https://flutter.dev"
            target="_blank"
            rel="noreferrer"
          >
            Flutter.
          </a>
        </p>
        <div className="flex w-72 h-72 bg-darkblue" />
      </div>
    </div>
  );
}
