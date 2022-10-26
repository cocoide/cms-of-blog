import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
type Props = { children: ReactNode }

const DefalutLayout = ({ children }: Props) => {
  return (
  <div>
    <div className="">
    <Header/>
    </div>
    <main className="h-screen"
    >
      {children}
      </main>
    <Footer/>
    </div>
    );
};

export default DefalutLayout