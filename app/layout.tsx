import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import background from "@/app/assets/background.module.scss";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "A Weather App for Pets at Home technical challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, background.background, "relative")}>
        <main className="flex min-h-screen flex-col items-center justify-center py-24 px-8">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
