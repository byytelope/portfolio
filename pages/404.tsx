import { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "../components/Button";
import HomeSection from "../components/home/HomeSection";

const FourOFour: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <HomeSection title="404 - not found" showTitle={true}>
        <div className="flex flex-col">
          <span className="pb-2 text-4xl xs:text-5xl md:text-6xl font-bold tracking-wide">
            That don&apos;t exist
          </span>
          <span className="text-lg xs:text-xl tracking-wider md:text-justify text-greyBlue">
            You seem lost...
          </span>
          <div className="pt-8">
            <Button onClick={() => router.push("/")}>Go Home</Button>
          </div>
        </div>
      </HomeSection>
    </div>
  );
};

export default FourOFour;
