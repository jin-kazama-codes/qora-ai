import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";
import AppBar from "@/components/AppBar";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_NAME}.ai`,
  description: "AI Assistants for making your work faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            inter.className,
            "h-screen flex flex-col antialiased dark text-foreground bg-background scroll-bar"
          )}
        >
          <NuqsAdapter>
            <Providers>
              <AppBar />
              <main className="flex-1  flex flex-col dark text-foreground bg-background h-[94vh]">
                {children}
              </main>
            </Providers>
          </NuqsAdapter>
        </body>
      </html>
    </ClerkProvider>
  );
}
