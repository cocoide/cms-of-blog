import RankingCard from "./ranking-card"

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
        <RankingCard/>
        <div>1</div>
        <div>1</div>
        
        
    </div>
    
  )
}
export default Ranking