import { ReactChild } from "react";
import CommonHead from "./CommonHead";

export default function Layout({ children }: { children: ReactChild }) {
  return (
    <div className="flex flex-col items-center bg-darkerBlue px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96">
      <CommonHead />
      {children}
    </div>
  );
}
