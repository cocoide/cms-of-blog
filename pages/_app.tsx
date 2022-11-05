import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { initializeFirebaseApp } from '../firebase/client'
import { AuthProvider } from '../context/auth'
import { AnimatePresence } from "framer-motion";

initializeFirebaseApp()
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <AnimatePresence>
    <Layout>
      <Component {...pageProps} key={router.route}/>
    </Layout>
    </AnimatePresence>
    </AuthProvider>
  )
  
}

export default MyApp
