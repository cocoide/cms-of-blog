import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import FooterNavi from "./footer-navi";
type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (

 <>
    <Header/>
      <main className="h-screen" >{children}</main>

      <div className="sticky bottom-0"
      ><FooterNavi/>
         </div>
    </>
    );
};

export default Layout