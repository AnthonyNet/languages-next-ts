import '../styles/globals.css'
import '../styles/Mobile.css'
import type { AppProps } from 'next/app'
import { Inter, Roboto_Mono } from "@next/font/google";


export default function App({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} /> );
}
