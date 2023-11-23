"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "@/components/header";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const AppWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
`;

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
        <ApolloProvider client={client}>
          <AppWrapper>
            <Header />
            {children}
          </AppWrapper>
        </ApolloProvider>
      </body>
    </html>
  );
}
