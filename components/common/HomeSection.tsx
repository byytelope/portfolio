import { ReactNode } from "react";
import TypewriterComponent from "typewriter-effect";

export default function HomeSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className="flex flex-col justify-start md:justify-center md:h-screen py-16 md:py-0 w-full">
      <div className="flex w-full pb-4">
        <TypewriterComponent
          onInit={(tw) => {
            tw.typeString(`${title};`).start();
          }}
          options={{
            wrapperClassName: "text-xl font-mono text-aqua",
            delay: 70,
          }}
        />
      </div>
      <div>{children}</div>
    </section>
  );
}
