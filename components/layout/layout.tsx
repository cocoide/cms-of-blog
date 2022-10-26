import { ReactNode } from "react";
import Footer from "../global-components/footer";
import Header from "../global-components/header";
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