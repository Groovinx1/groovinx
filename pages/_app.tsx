import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
// import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
//Binding events.
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }: AppProps) {
  return (
    < div >
      <Head>
        <title>Groovinx</title>
        <meta name="theme-color" content="#EC6448" />
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Groovinx App"
        />
      </Head>
      <Component {...pageProps} />
    </div >
  )
}
export default MyApp
