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

const stackArray = [
  {
    name: "Python",
    icon: <SiPython />,
    link: "https://python.org",
  },
  {
    name: "Dart",
    icon: <SiDart />,
    link: "https://dart.dev",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    link: "https://javascript.com",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    link: "https://nodejs.org",
  },
  {
    name: "Deno",
    icon: <SiDeno />,
    link: "https://deno.land",
  },
  {
    name: "React",
    icon: <SiReact />,
    link: "https://reactjs.org",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    link: "https://nextjs.org",
  },
  {
    name: "Flutter",
    icon: <SiFlutter />,
    link: "https://flutter.dev",
  },
];

const techList = stackArray.map((stack, i) => {
  return (
    <a
      key={stack.name + i.toString()}
      className="p-2 rounded-lg max-w-max"
      href={stack.link}
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-offWhite">&gt;</span> {stack.icon} {stack.name}
    </a>
  );
});

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-4 pt-2 font-mono text-lg xs:text-xl">
      {techList}
    </div>
  );
}
