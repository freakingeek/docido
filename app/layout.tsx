import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const estedad = localFont({
  src: "../public/assets/fonts/Estedad-FD.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "داکیدو",
    template: "%s - داکیدو",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={estedad.className}>
        <section className="max-w-screen-2xl mx-auto">{children}</section>
      </body>
    </html>
  );
}
