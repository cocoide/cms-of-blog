import Head from "next/head"
import PortpolioCard from "../components/profile/portplio-card"
import { motion } from "framer-motion"

const profile = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ ease: "easeOut", duration: 1 }}
  >
    <Head>
        <title>PROFILE</title>
        <meta name="description" content="profile" />
      </Head>
      
    <h2 className="text-center md:text-2xl text-lg"
    >MY  推し</h2>
    
    <div className="md:gap-19 md:px-20 gap-8 p-10 justify-center
    grid grid-cols-3">
      {[...Array(6)].map((_,i) => (
      <PortpolioCard key={0} name={"ゆうた"} id={0}/>
      ))}
    </div>
    </motion.div>
  )
}
export default profile