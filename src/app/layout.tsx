import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeVector Technologies",
  description: "IT Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="resource/images/favicon.ico" />
      {/* You can include other meta tags or link elements here */}
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
