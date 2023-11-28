import Footer from "@/app/_components/Footer";

export const metadata = {
  title: "Mohamed Shadhaan",
  description: "BSE Student / Web dev / Rust",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col w-full min-h-[calc(85dvh-6rem)] mt-24 md:mt-32 gap-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
