import Image from "next/image"
import { NextRouter } from "next/router"

export const Infuluencer = (router: NextRouter)=>{
  const { id } = router.query;
  return (
    <div>
      <Image src={`/${id}.jpg`} alt="" width={200} height={200}/>
    </div>
  )
}