import { ReactNode } from "react";
import { WindupChildren, Pace, CharWrapper } from "windups";
import Cursor from "../Cursor";
import SmoothChar from "../SmoothChar";

export default function HomeSection({
  children,
  title,
  showTitle,
}: {
  children: ReactNode;
  title: string;
  showTitle: boolean;
}) {
  return (
    <section className="flex flex-col justify-start md:justify-center md:h-screen py-16 md:py-0 w-full">
      <div className="flex items-center w-full pb-4">
        {showTitle ? (
          <div>
            <WindupChildren>
              <Pace ms={70}>
                <span className="text-xl font-mono text-aqua">
                  <CharWrapper element={SmoothChar}>{title}</CharWrapper>
                </span>
              </Pace>
            </WindupChildren>
          </div>
        ) : (
          <span className="text-xl font-mono text-aqua">&nbsp;</span>
        )}
        <Cursor />
      </div>
      <div>{children}</div>
    </section>
  );
}
