import Link from "next/link";
import LoginButton from "./login-button";


const Header = () => {
  return (
    <header className="p-5 md:p-8 first-letter:border-b flex flex-row items-center h-14 px-4
    backdrop-blur-xl bg-white/30"
    style={{zIndex:2}}
    >
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