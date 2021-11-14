import TypewriterComponent from "typewriter-effect";
import { mainSectionClassName } from "../utils/classnames";

export default function Employers() {
  return (
    <div className={mainSectionClassName}>
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
