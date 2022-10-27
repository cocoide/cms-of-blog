import Link from "next/link";
import DownMenu from "../button/down-menu";
import LoginButton from "../button/login-button";


const Header = () => {
  return (
    <header className="
    m-2 md:p-8 
    flex flex-row 
    items-center
    
    h-16 bg-white
    inset-x-0 botton-0
    "
    >
      <h1>
        <Link href="/">
          <a className="text-2xl md:text-3xl">推しコミ</a>
        </Link>
      </h1>
      <span className='flex-1'></span>
      <DownMenu/>
    </header>
  )
}
export default Header;