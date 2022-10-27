import NormalUser from "./normal-user"
import RankedUser from "./ranked-user"

const Ranking = () => {
  return (
    <div className="rounded-lg 
    drop-shadow
    divide-y divide-slate-100
    m-10
    border-1
    shadow-sm
    bg-white"
    >
        <h2 className="h-10 p-2 text-center text-white
        bg-indigo-300
        rounded-t-xl"
        >今週の『推し』ランキング</h2>
        
        <RankedUser/>
        <RankedUser/>
        <RankedUser/>
        <NormalUser/>
        <NormalUser/>
        <NormalUser/>
        
        
    </div>
    
  )
}
export default Ranking