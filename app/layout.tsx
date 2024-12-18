import type { Metadata } from "next";
import {Mulish} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

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
        <ClerkProvider appearance={{
          baseTheme: dark,
        }}>
           {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
