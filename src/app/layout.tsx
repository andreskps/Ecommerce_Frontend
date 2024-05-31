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
// import { FacebookPixelEvents } from "@/components/facebookPixel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">

        <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1116424846318536');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=1116424846318536&ev=PageView&noscript=1`}
          />
        </noscript>
        </head>
        
        <body className={inter.className}>
          {children}
        {/* <FacebookPixelEvents /> */}
          <Toaster />
        </body>
      </html>
    </AuthProvider>
  );
}
