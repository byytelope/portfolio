import TypewriterComponent from "typewriter-effect";

export default function Header() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex w-full pb-4">
        <TypewriterComponent
          onInit={(tw) => {
            tw.typeString("hello,")
              .pauseFor(1000)
              .typeString(" my name is")
              .start();
          }}
          options={{
            wrapperClassName: "text-xl font-mono text-aqua",
            delay: 70,
          }}
        />
      </div>
      <span className="pb-2 text-6xl font-bold tracking-wide">
        Mohamed Shadhaan
      </span>
      <p className="text-xl tracking-wider text-greyBlue">
        I&apos;m a software engineer specialising in building frontends
        <br /> for both the{" "}
        <span className="font-mono text-aqua">{"<web/> && Mobile();"}</span>
      </p>
    </div>
  );
}
