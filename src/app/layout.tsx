import NavBar from "@/components/GeneralComponent/NavBar";
import Footer from "@/components/GeneralComponent/Footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
