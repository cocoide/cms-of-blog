import Head from "next/head"
import PortpolioCard from "../components/profile/portplio-card"
import { motion } from "framer-motion"

const profile = () => {
  return (
    <div>
    <Head>
        <title>PROFILE</title>
        <meta name="description" content="profile" />
      </Head>
      
    <h2 className="text-center md:text-2xl text-lg"
    >MY  推し</h2>
    
    <div className="md:gap-19 md:px-20 gap-8 p-10 justify-center
    grid grid-cols-3">
      {[...Array(6)].map((_,i) => (
      <PortpolioCard key={i} name={"ゆうた"} id={0}/>
      ))}
    </div>
    </div>
  )
}
export default profile