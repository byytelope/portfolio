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
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex gap-4 rounded-md px-3 py-2 transition duration-300 ease-out hover:bg-stone-200/50 dark:hover:bg-stone-800/50"
    >
      <div className="flex w-full flex-col md:w-fit">
        <span>{title}</span>
        <span className="text-stone-400">{description}</span>
      </div>
      <div className="ml-auto flex items-center">{trailing}</div>
    </a>
  );
};
