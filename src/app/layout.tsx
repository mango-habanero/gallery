'use client';

import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import React from "react";
import { Inter } from 'next/font/google';
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { metadata } from "~/lib/utils";

const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en" className={`${inter.className} anti-aliased bg-background text-light`}>
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {metadata.icons.map((icon) => (
                <link key={icon.url} rel={icon.rel} href={icon.url} />
            ))}
            {metadata.authors.map((author) => (
                <meta key={author.url} name="author" content={author.name} />
            ))}
        </Head>
        <body>
        <SessionProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
        </SessionProvider>
        </body>
        </html>
    );
};

export default RootLayout;
