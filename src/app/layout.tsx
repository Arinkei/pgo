import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
        <Footer />
      </body>
    </html>
  );
}
