import { ReactNode } from "react";
import Footer from "../normal-parts/footer";
import Header from "../normal-parts/header";
import FooterNavi from "../normal-parts/footer-navi";
type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (

 <>
    <Header/>
      <main className="h-screen" >{children}</main>
      <Footer/>
      <div className="sticky bottom-0"
      ><FooterNavi/>
         </div>
    </>
    );
};

export default Layout