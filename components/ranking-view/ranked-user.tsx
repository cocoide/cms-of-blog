import StarIcon from "public/star.svg"
import CrownIcon from "public/svgart/crown-icon.svg"
import UserIcon from "public/icon/user-icon.svg"

const RankedUser = () => {
  return (
    <div className="flex flex-row items-center
     justify-center p-1 gap-3">
      <h1>1位</h1>
        <CrownIcon className="h-10 w-10 bg-yellow-100 rounded-full border-2"/>
        
        <button className="rounded-lg border-2 aspect-square">
        <UserIcon className="w-9"/>
    </button>
        
        <div className="flex flex-col">
        <h2>みんなの愛され王子</h2>
        <p className="text-slate-400">星350個・共有139回</p>
        </div>
        
    </div>
  )
}
export default RankedUser