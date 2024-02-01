"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "@/components/header/header";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const AppWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
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
            <ToastContainer hideProgressBar={true} autoClose={2500} />
          </AppWrapper>
        </ApolloProvider>
      </body>
    </html>
  );
}
