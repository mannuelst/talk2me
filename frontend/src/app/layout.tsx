import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk2Me",
  description: " A meetings plataform with audio, video, screen sharing and chat ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
