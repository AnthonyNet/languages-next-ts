
import "../styles/globals.css";
import  '../styles/Mobile.css';

import Head from "./head";
import Providers from "./Providers";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>

        <Providers> <Navbar /> {children} </Providers>
      </body>
    </html>
  );
}
