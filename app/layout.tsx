"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new ApolloClient({
    uri: "https://deafening-egg-production.up.railway.app/",
    cache: new InMemoryCache(),
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
