import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export const metadata: Metadata = {
  title: "WebGrab | Premier Digital Growth Agency",
  description: "WebGrab is a modern design and digital growth agency specializing in immersive web development, AI business automation, and comprehensive digital marketing strategies.",
  icons: {
    icon: "/favicon2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
