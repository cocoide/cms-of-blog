import UserIcon from "public/icon/user-icon.svg"


const NormalUser = () => {
  return (
    <div className="flex flew-row justify-center items-center p-1">
      <p>４位</p>
      <UserIcon className="h-5 w-5 rounded-md border-2 mx-4"/>
      <h2 className="text-slate-400">港区に憧れる世田谷区民</h2>
    </div>
  )
}
export default NormalUser