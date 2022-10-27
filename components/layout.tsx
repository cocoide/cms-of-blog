import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import FooterNavi from "./footer/footer-navi";
import Ranking from "./overview/ranking";
type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (

 <>
    <div className="sticky top-0
    z-50">
    <Header/>
    </div>
    
    <div className="flex flex-col md:flex-row 
    z-10"
    >
      
      <main className="w-auto md:w-3/5" >{children}</main>
      {/* ランキング表のレスポンシブ対応*/}
      <aside className="w-auto md:w-2/5
      ">
        <Ranking/></aside>
    </div>
    
      <Footer/>
      
      <div className="sticky bottom-0"
      ><FooterNavi/>
         </div>
         {/* FooterNaviはモバイルだけで表示 */}
    </>
    );
};

export default Layout