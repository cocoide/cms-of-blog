import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import FooterNavi from "./footer/footer-navi";
import Ranking from "./overview/ranking";
type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (

 <>
    <div className="z-50 sticky top-0">
    <Header/>
    </div>
    
    <div className="flex flex-row z-10"
    >
      
      <main className="w-auto md:w-3/5 h-screen" >{children}</main>
      {/* ランキング表をレスポンシブで表示を分ける */}
      <aside className="w-auto md:w-2/5
      hidden md:inline-block">
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