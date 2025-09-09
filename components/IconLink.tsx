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
      className="flex items-center justify-center -m-1 h-6 w-6 text-stone-600 dark:text-stone-400 rounded-lg"
    >
      {icon}
    </a>
  );
};
