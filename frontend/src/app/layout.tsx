import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const font_ = Archivo({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Talk2Me",
  description: " A meetings platform with audio, video, screen sharing and chat ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <body className={`${font_.className} bg-black text-white`} >
        {children}
      </body>
    </html >
  );
}
