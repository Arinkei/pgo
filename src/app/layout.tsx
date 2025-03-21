import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
      <body className="flex flex-col min-h-screen ">
        <Header />
          <main className="flex flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
