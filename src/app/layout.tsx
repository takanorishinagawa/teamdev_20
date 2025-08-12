import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "./components/header/Header";
import "./globals.css";

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

        {/* トースト導入 */}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontFamily: "var(--font-geist-sans)",
              background: "#FFFF",
              color: "#2563eb",
              fontSize: "14px",
              padding: "12px 16px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            },
            success: {
              iconTheme: {
                primary: "#2563eb",
                secondary: "#FFFF",
              },
            },
            error: {
              iconTheme: {
                primary: "#B00020",
                secondary: "#FFFF",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
