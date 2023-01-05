import "../styles/globals.css";
import Head from "./head";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
