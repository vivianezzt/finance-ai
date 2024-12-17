import type { Metadata } from "next";
import {Mulish} from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Finance Ai",
  description: "Aplicativo de finanças pessoais com inteligência artificial", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${mulish.className} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
