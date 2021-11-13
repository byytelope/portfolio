import { ReactChild } from "react";
import CommonHead from "../components/CommonHead";

export default function Layout({ children }: { children: ReactChild }) {
  return (
    <div className="flex flex-col items-center bg-darkerBlue lg:px-48 xl:px-96">
      <CommonHead />
      {children}
    </div>
  );
}
