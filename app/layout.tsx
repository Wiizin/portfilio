import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer & Portfolio Specialist",
  description:
    "Professional portfolio showcasing modern web development skills. Expert in React, Next.js, Vue.js, and full-stack development. Available for freelance projects.",
  keywords: [
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Web Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
