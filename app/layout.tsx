import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aditya Kher — Full‑Stack & Mobile Developer",
  description: "Portfolio of Aditya Kher (Kheraditya) — .NET 8 / C# / Node.js backend + React Native mobile apps."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <div className="mx-auto max-w-6xl px-4">
          <Navbar />
          <main className="pb-16 pt-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
