import { CvButton } from "@/app//cv-button";
import { fetchCvLink } from "@/lib/actions";

export const CvButtonWrapper = async () => {
  const cvLink = await fetchCvLink();

  return <CvButton href={cvLink.url} />;
};
