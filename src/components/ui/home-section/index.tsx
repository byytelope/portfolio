import type { UrlObject } from "node:url";

import type { HomeData } from "@/lib/types";
import { ListItem } from "../list-item";
import { AnimatedHomeSection } from "./animated-home-section";

type HomeSectionProps<T extends HomeData> = {
  promise: () => Promise<T[]>;
  title: string;
  link?: string | UrlObject;
  trailing?: (data: T) => React.ReactNode;
};

export const HomeSection = async <T extends HomeData>({
  promise,
  title,
  link,
  trailing,
}: HomeSectionProps<T>) => {
  const data = await promise();

  return (
    <AnimatedHomeSection title={title} link={link}>
      {data.map((item) => (
        <ListItem
          key={item.id}
          title={item.name}
          description={item.description}
          href={item.url}
          trailing={trailing?.(item)}
        />
      ))}
    </AnimatedHomeSection>
  );
};
