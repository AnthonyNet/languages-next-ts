
import "../styles/globals.css";
import  '../styles/Mobile.css';

import Head from "./head";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
