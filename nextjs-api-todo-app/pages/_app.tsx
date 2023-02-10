import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps:{ session, ...pageProps }}: AppProps) {
  return (
    <>
      <SessionProvider>
        <Head>
          <title>Todo</title>
        </Head>
        <div>共通のTodoヘッダー</div>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
