import Link from "next/link";
import LoginButton from "./login-button";

const Header = () => {
  return (
    <header className="first-letter:border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/">
          <a className="text-2xl">推し愛い</a>
        </Link>
      </h1>
      <span className='flex-1'></span>
      <LoginButton/>
    </header>
  )
}
export default Header;