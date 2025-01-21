export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full min-h-[100dvh] pt-24 md:pt-32 gap-16">
      {children}
    </main>
  );
}
