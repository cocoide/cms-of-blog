import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefalutLayout from '../components/layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefalutLayout>
      <Component {...pageProps}/>
    </DefalutLayout>
  )
  
}

export default MyApp
