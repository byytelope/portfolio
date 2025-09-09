export const ListItem = ({
  title,
  description,
  href,
  trailing,
}: {
  title: string;
  description: string;
  href?: string;
  trailing?: React.ReactNode;
}) => {
  return (
    <div>
      {/* Redundant div to fix divide radius */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex gap-4 py-2 px-3 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition ease-out duration-300 rounded-md"
      >
        <div className="flex flex-col w-full md:w-fit">
          <span>{title}</span>
          <span className="text-stone-400">{description}</span>
        </div>
        <div className="flex ml-auto items-center">{trailing}</div>
      </a>
    </div>
  );
};
