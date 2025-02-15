import { Toaster } from "react-hot-toast";
import "../../styles/globals.css";
import AdminNav from "@/admin-side/components/AdminNav";

export const metadata = {
  title: "Alexa",
  description: "Alexa Fashion Store",
  icons: {
    icon: process.env.NEXT_PUBLIC_ICON_URL,
    shortcut: process.env.NEXT_PUBLIC_ICON_URL,
    apple: process.env.NEXT_PUBLIC_ICON_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-row min-h-screen bg-gray-100 overflow-y-hidden">
        <Toaster />
        <header className="bg-white">
          <AdminNav />
        </header>
        <main id="root" className="flex-1 p-5 h-screen overflow-y-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
