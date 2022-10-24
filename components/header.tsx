import Link from "next/link";
import LoginButton from "./login-button";
import MenueButton from "./menu-button";


const Header = () => {
  return (
    <header className="pt-5 first-letter:border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/">
          <a className="text-2xl md:text-3xl">推しコミ</a>
        </Link>
      </h1>
      <span className='flex-1'></span>
      <LoginButton/>
    </header>
  )
}
export default Header;