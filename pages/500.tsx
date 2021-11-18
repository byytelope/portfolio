import { useRouter } from "next/router";
import Button from "../components/Button";
import HomeSection from "../components/home/HomeSection";

export default function FiveHundred() {
  const router = useRouter();

  return (
    <div>
      <HomeSection title="500 - internal error" showTitle={true}>
        <div className="flex flex-col">
          <span className="pb-2 text-4xl xs:text-5xl md:text-6xl font-bold tracking-wide">
            Oopsie Daisy
          </span>
          <span className="text-lg xs:text-xl tracking-wider text-greyBlue">
            Server not feeling quite well...
          </span>
          <div className="py-8">
            <Button onClick={() => router.push("/")}>Try Again</Button>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
