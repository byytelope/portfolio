import TypewriterComponent from "typewriter-effect";
import {
  SiPython,
  SiDart,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDeno,
  SiReact,
  SiNextdotjs,
  SiFlutter,
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex w-full pb-4">
        <TypewriterComponent
          onInit={(tw) => {
            tw.typeString("my tech stack;").start();
          }}
          options={{
            wrapperClassName: "text-xl font-mono text-aqua",
            delay: 70,
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-32 gap-y-4 font-mono text-xl text-greyBlue">
        <a href="https://python.org" target="_blank" rel="noreferrer">
          <span className="text-offWhite">
            &gt; <SiPython className="inline-block" />
          </span>{" "}
          Python
        </a>
        <a href="https://dartlang.org" target="_blank" rel="noreferrer">
          <span className="text-offWhite">
            &gt; <SiDart className="inline-block" />
          </span>{" "}
          Dart
        </a>
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-offWhite">
            &gt; <SiTypescript className="inline-block" />
          </span>{" "}
          TypeScript
        </a>
        <a href="https://javascript.com" target="_blank" rel="noreferrer">
          <span className="text-offWhite">
            &gt; <SiJavascript className="inline-block" />
          </span>{" "}
          JavaScript
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <span className="text-offWhite">
            &gt; <SiNodedotjs className="inline-block" />
          </span>{" "}
          Node.js
        </a>
        <a href="https://deno.land" target="_blank" rel="noreferrer">
          <span className="text-offWhite">
            &gt; <SiDeno className="inline-block" />
          </span>{" "}
          Deno
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <span className="text-offWhite">
            &gt; <SiReact className="inline-block" />
          </span>{" "}
          React
        </a>
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          <span className="text-offWhite">
            &gt; <SiNextdotjs className="inline-block" />
          </span>{" "}
          Next.js
        </a>
        <a href="https://flutter.dev" target="_blank" rel="noreferrer">
          <span className="text-offWhite">
            &gt; <SiFlutter className="inline-block" />
          </span>{" "}
          Flutter
        </a>
      </div>
    </div>
  );
}
