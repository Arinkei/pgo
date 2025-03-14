import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import "./globals.css";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
