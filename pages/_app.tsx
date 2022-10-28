import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { initializeFirebaseApp } from '../firebase/firebase'

initializeFirebaseApp()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
  
}

export default MyApp
