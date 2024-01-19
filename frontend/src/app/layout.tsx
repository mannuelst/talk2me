import type { Metadata } from "next";
import localFont from "next/font/local";
import { SocketProvider } from "../contexts/SocketContext";
import "./globals.css";

const fl = localFont({ src: "../../public/Poppins-Regular.ttf" })

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
      <body className={`${fl.className} bg-black text-white`} >
        <SocketProvider>
          {children}

        </SocketProvider>
      </body>
    </html >
  );
}
