import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import FooterNavi from "./footer/footer-navi";
import Ranking from "./ranking-view/ranking";
import SendQButton from "./question-box.tsx/send-q-button";
type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (

 <>
    <div className="sticky top-0
    z-50">
    <Header/>
    </div>
    
    <div className="flex flex-col lg:flex-row 
    z-10" 
    >
      
      <main className="w-auto lg:w-3/5" >{children}</main>
      {/* ランキング表のレスポンシブ対応*/}
      <aside className="w-auto lg:w-2/5
      ">
        <Ranking/></aside>
    
      
      </div>
      <Footer/>
      
      <div className="sticky bottom-0 inset-x-0"
        //  {/* FooterNaviはモバイルだけで表示 */}
      ><FooterNavi/>
         </div>
    </>
    );
};

export default Layout