export const IconLink = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactElement;
  href: string;
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="-m-1 flex h-6 w-6 items-center justify-center rounded-lg text-stone-600 dark:text-stone-400"
    >
      {icon}
    </a>
  );
};
