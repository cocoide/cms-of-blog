import InboxIcon from "public/icon/inbox-icon.svg"
import PrezentIcon from "public/icon/prezent-icon.svg"
import ChatIcon from "public/icon/chat-icon.svg"
import UserIcon from "public/icon/user-icon.svg"
import Link from "next/link"
const FooterNavi = () => {
  return (
    <>
    <div className="md:hidden
    h-16  drop-shadow-xl bg-white
    inset-x-0 botton-0
    border-2
    rounded-sm">
        
        <div className="gap-10 flex flex-row justify-center pt-3">
          <InboxIcon width={40} height={40} color={"#7B68EE"}>
            <Link href="/profile"/>
          </InboxIcon>
          <UserIcon width={40} height={40} color={"#7B68EE"}/>
          <ChatIcon width={40} height={40} color={"#7B68EE"}/>
          <PrezentIcon width={40} height={40} color={"#7B68EE"}/>
          
        </div>
        
        
    </div>
    </>
  )
}
export default FooterNavi