import { fetchCvLink } from "@/lib/actions";
import { CvButton } from "./cv-button";

export const CvButtonWrapper = async () => {
  const cvLink = await fetchCvLink();

  return <CvButton href={cvLink.url} />;
};
