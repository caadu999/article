import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Article",
  description: "Artigos e Notícias Espaciais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
