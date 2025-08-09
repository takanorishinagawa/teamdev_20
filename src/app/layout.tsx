import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header/Header";
import "./globals.css";
import Header from "./components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TeamDev#20",
  description: "チーム開発#20",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ヘッダー */}
        <Header />

        {/* メイン画面 */}
        {children}
      </body>
    </html>
  );
}
