import InboxIcon from "public/icon/inbox-icon.svg"
import PrezentIcon from "public/icon/prezent-icon.svg"
import ChatIcon from "public/icon/chat-icon.svg"
import UserIcon from "public/icon/user-icon.svg"
import CoinIcon from "public/icon/coin-icon.svg"
import ChartIcon from "public/icon/chart-icon.svg"

import Link from "next/link"
const FooterNavi = () => {
  return (
    <>
    <div className="lg:hidden
    h-14 bg-white
    inset-x-0 botton-0
    border-t-2
    rounded-sm">
        
        <div className="gap-10 flex flex-row justify-center p-2 content-center">
          <button>
            <Link href={"/box"}>
          <InboxIcon className="h-8 w-8 text-indigo-400"/>
            </Link>
          </button>
      
          <button>
            <Link href={"/profile"}>
          <UserIcon className="h-8 w-8 text-indigo-400"/>
            </Link>
            </button>
            
            <button>
              <Link href={"/question"}>
          <ChatIcon className="h-8 w-8 text-indigo-400"/>
              </Link>
              </button>
          
          
          <button>
            <Link href={"/chart"}>
          <ChartIcon className="h-8 w-8 text-indigo-400"/>
            </Link>
            </button>
          
        </div>
        
        
    </div>
    </>
  )
}
export default FooterNavi