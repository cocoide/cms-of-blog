import type { NextPage } from 'next'
import Head from 'next/head'
import { Cube } from '../components/threejs/cube'
import CubeAnimation from '../components/threejs/cube-animation'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>OSICOMI</title>
        <meta name="description" content="osicomi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <CubeAnimation/>
    </div>
  )
}

export default Home
