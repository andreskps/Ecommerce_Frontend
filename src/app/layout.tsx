import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Petlify",
    default: "Inicio", // a default is required when creating a template
  },
  description:
    "Petlify is a pet store that offers a wide range of pet products and services.",
};

import React from "react"; // Add the missing import statement
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}

          <Toaster />
        </body>
      </html>
    </AuthProvider>
  );
}
