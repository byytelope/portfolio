import Footer from "@/components/Footer";

export const metadata = {
  title: "Mohamed Shadhaan",
  description: "BSE Student / Developer",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col w-full min-h-[calc(85dvh-6rem)] py-16 md:py-24 xl:py-32 gap-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
