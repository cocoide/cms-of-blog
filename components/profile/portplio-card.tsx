import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react"

type PortpolioCardProps ={
    key: number
    name: string
}

const PortpolioCard: FC<PortpolioCardProps>= (props) => {
  return (
    <div className="flex flex-col">
        <Link href={`/${props.key}`} key={props.key}>
    <div className="bg-gray-400 shadow-md rounded-lg aspect-square">
            <Image src={`/${props.key}.jpg`} width={200} height={200} alt=""/>
    </div>
        </Link>
        <div className="flex justify-center pt-1">{props.name}</div>
    </div>
  )
}
export default PortpolioCard