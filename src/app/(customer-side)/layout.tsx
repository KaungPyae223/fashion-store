import NavBar from "@/customer-side/components/NavBar";
import Footer from "@/customer-side/components/Footer";
import "../../styles/globals.css";
import { Toaster } from "react-hot-toast";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Toaster />
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
