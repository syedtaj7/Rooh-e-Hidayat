import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from "@/context/auth-context";
import { ProgressProvider } from "@/context/progress-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Islamic Guidance - Umrah, Hajj & Quran",
  description: "A spiritual journey for the soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${amiri.variable} antialiased bg-background text-foreground flex flex-col min-h-screen relative`}
      >
        <div className="fixed inset-0 z-[-1] opacity-70 pointer-events-none" style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: "800px 800px" }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ProgressProvider>
              <Navbar />
              <main className="flex-grow pt-20">
                {children}
              </main>
              <Footer />
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
