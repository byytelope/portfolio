interface InfoObjectValue {
  value: string | string[];
  importance: "high" | "low";
}

const info: Record<string, InfoObjectValue> = {
  name: {
    value: "Mohamed Shadhaan",
    importance: "high",
  },
  intro: {
    value:
      "I’m a software engineer specialising in building frontends for both the web and mobile devices.",
    importance: "low",
  },
  about: {
    value:
      "I have always been interested in computers and the software side of their inner-workings. So, when covid came around and I needed to find a hobby, it was natural for me to jump straight into coding. I had chosen Python as my starting point, but just a few months later, the perfect opportunity came up for me to take up web development, as a couple of my close friends needed a website for their startup café. Fast-forward to today, I am now comfortably proficient in Node.js, Deno, React, Next.js and even Flutter.",
    importance: "low",
  },
  technologies: {
    value: [
      "JavaScript",
      "TypeScript",
      "Dart",
      "Python",
      "Node.js",
      "Deno",
      "Flutter",
      "React",
      "Next.js",
    ],
    importance: "low",
  },
  employers: {
    value: ["The Coffeehouse Addu", "Verticoda Studios"],
    importance: "low",
  },
};

export default info;
