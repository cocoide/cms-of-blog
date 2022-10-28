import Link from "next/link";
import DownMenu from "../button/down-menu";
import LoginButton from "../button/login-button";
import BellIcon from "public/icon/bell-icon.svg"


import { useAuth } from "../../context/auth";
import { useState } from "react";
import { login } from "../../lib/auth";

const Header = () => {
  
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };
  
  
  return (
    <header className="
    p-5 md:p-10 m-3
    flex flex-row items-center
    h-16 bg-white
    inset-x-0 botton-0
    "
    >
      <h1>
        <Link href="/profile">
          <a className="text-2xl md:text-3xl">推しコミ</a>
        </Link>
      </h1>
      <span className='flex-1'/>
      <span className="flex-1"></span>
      {user === null && !waiting && <LoginButton>ログイン</LoginButton>}
      {user && <DownMenu/>}
    </header>
  )
}
export default Header;