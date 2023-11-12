export default function IconLink({
  icon,
  href,
}: {
  icon: React.ReactElement;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="-m-1 h-6 w-6 text-stone-500 dark:text-stone-400 hover:-translate-y-1 duration-300 transition"
    >
      {icon}
    </a>
  );
}
