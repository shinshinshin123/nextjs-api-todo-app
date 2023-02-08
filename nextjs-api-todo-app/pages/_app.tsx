import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <div>
        共通のTodoヘッダー
      </div>
      <Component {...pageProps} />
    </>
  )
}
