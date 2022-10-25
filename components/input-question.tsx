const InputQuestion = () => {
  
  return (
    
    <div className="p-5 md:p-10 lg:w-2/3 text-right">
      <div className="bg-sky-300 rounded-lg aspect-video px-12 md:px-16">
      <h2 className="md:text-2xl text-lg p-5 text-white text-left">
        質問箱
      </h2>
      <textarea 
      
      className="rounded-lg aspect-video w-full p-5">
      </textarea>
      <input placeholder="1000円" 
      className="bg-sky-300 p-1 text-center m-5"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    const value:number = Number(e.target.value);
    console.log(value);}} />
      </div>
    </div>
  )
}
export default InputQuestion