const InputQuestion = () => {
  
  return (
    
    <div className="p-5 md:p-10 md:w-3/5 drop-shadow-md text-center">
      <div className="bg-sky-300
       rounded-lg aspect-video px-14 md:px-16">
      <h2 className="text-white md:text-2xl text-lg p-5 text-left">
        質問箱
      </h2>
      <textarea 
      
      className="rounded-lg aspect-video w-full p-5">
      </textarea>
      <input placeholder="1000円" 
      className="bg-transparent p-1 text-center m-5 w-2/5 text-white"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    const value:number = Number(e.target.value);
    }} />
      </div>
    </div>
  )
}
export default InputQuestion