import type { UrlObject } from "node:url";

import type { HomeData } from "@/lib/types";

import { LinkButton } from "./link-button";
import { ListItem } from "./list-item";

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
    <section className="flex flex-col justify-center gap-4">
      {link !== undefined ? (
        <LinkButton title={title} href={link} prefetch={false} />
      ) : (
        <span className="w-fit rounded-md bg-stone-200 px-1.5 pt-1 pb-0.5 text-sm uppercase dark:bg-stone-800">
          {title}
        </span>
      )}

      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <ListItem
            key={item.id}
            title={item.name}
            description={item.description}
            href={item.url}
            trailing={trailing?.(item)}
          />
        ))}
      </div>
    </section>
  );
};
