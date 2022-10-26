import InboxIcon from "public/icon/inbox-icon.svg"
import PrezentIcon from "public/icon/Prezent-icon.svg"
import ChatIcon from "public/icon/Chat-icon.svg"
import UserIcon from "public/icon/User-icon.svg"
const FooterNavi = () => {
  return (
    <>
    <div className="md:hidden
    h-16  shadow-xl bg-indigo-300
    inset-x-0 botton-0">
        
        <div className="gap-10 flex flex-row justify-center pt-3">
          <InboxIcon width={40} height={40} color={"white"}/>
          <UserIcon width={40} height={40} color={"white"}/>
          <ChatIcon width={40} height={40} color={"white"}/>
          <PrezentIcon width={40} height={40} color={"white"}/>
          
        </div>
        
        
        
        
        
        
    </div>
    </>
  )
}
export default FooterNavi