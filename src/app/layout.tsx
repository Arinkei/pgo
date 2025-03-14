import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PGO",
  description: "PGO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <Header />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
