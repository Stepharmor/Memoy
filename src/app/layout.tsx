import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ScrollToTop from "@/components/ScrollToTop";

const agrandir = localFont({
  src: [
    {
      path: "../../public/fonts/Agrandir/Web Fonts/1dc7840abb13fcda12aa8d1cb21fb832.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-agrandir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memoy – Une présence douce qui veille ",
  description:
    "Memoy est l'application mobile qui vous aide à capturer, organiser et revivre vos souvenirs les plus précieux.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${agrandir.variable} antialiased bg-background text-foreground`}
      >
        <ScrollToTop />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
