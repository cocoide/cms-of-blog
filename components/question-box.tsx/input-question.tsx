import SelectTarget from "./select-target";

const InputQuestion = () => {

  
  return (
    
    <div className="p-5 md:p-12 drop-shadow-md text-center"
    >
      <div className="bg-indigo-200
       rounded-xl aspect-video px-14 md:px-16"
       >
      <h2 className="text-white md:text-2xl text-lg py-5 text-left
      flex flex-row items-center">
        <SelectTarget/>
        <span className="w-5"></span>
          君へ
      </h2>
      <textarea 
      className="aspect-video w-full p-5 bg-indigo-50 shadow-inner"
      >
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