export default function About() {
  return (
    <div className="flex flex-col lg:flex-row">
      <p className="flex-1 pr-8 text-lg xs:text-xl tracking-wider md:text-justify text-greyBlue">
        Being someone who has been intrigued by computers and how computer
        software works in general, COVID-19 was the perfect excuse for me to
        learn and understand the basics of coding. With{" "}
        <span className="font-mono text-offWhite">Python</span> being what I
        initially learnt, it took only a few months to realize that I was just
        as interested in both web development and design. It was during this
        time, a couple of my friends needed a website for their startup café,
        offering me the perfect opportunity to practically test what I had
        learnt. Fast-forward to today, I am now well versed in{" "}
        <span className="font-mono text-offWhite">
          Node.js, Deno, React, Next.js,
        </span>{" "}
        and even <span className="font-mono text-offWhite">Flutter</span>. I
        continue to believe that expanding my knowledge and learning different
        languages is key to becoming better at what I do.
      </p>
      <div className="flex w-full lg:w-72 h-72 bg-darkblue mt-8 lg:mt-1" />
    </div>
  );
}
