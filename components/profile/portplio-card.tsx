import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react"

type PortpolioCardProps ={
    id: number
    name: string
}




const PortpolioCard: FC<PortpolioCardProps>= (props) => {
    
    const router = useRouter();
    const [id, setId] = useState<number>()
    
    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
          setId(Number(router.query.id));
        }
      }, [router]);
      
      useEffect(() => {
        if (id) {
          // ここでidの値を使用してデータをフェッチする 
        }
      }, [id]);
      
    
    return (
      <div className="flex flex-col">
        
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
    
        <Link href={`/${props.id}`} key={props.id}>
    <div className="bg-gray-400 shadow-md rounded-lg aspect-square">
            <Image src={`/${props.id}.jpg`} width={200} height={200} alt=""/>
    </div>
        </Link>
        <div className="flex justify-center pt-1">{props.name}</div>
        
        </motion.div>
    </div>
  )
}
export default PortpolioCard