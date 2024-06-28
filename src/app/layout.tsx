import "~/styles/globals.css";

import {TRPCReactProvider} from "~/trpc/react";
import React from "react";
import {Inter} from 'next/font/google'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],

})

export const metadata = {
  authors: [{ name: 'Mango Habanero', url: 'https://mango-habanero.dev/' }],
  title: "Gallery",
  description: "A gallery application.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} anti-aliased bg-background text-light`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
