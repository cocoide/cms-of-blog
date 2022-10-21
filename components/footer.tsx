import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-row h-14 px-4 space-x-5 justify-center">
      <h2 className="flex">
      ©osicomi
      </h2>
      <h3 className="flex flex-col space-y-1">
        <Link href="/profile">
        <a className="">マイページ</a>
        </Link>
        <Link href="/posts">
        <a className="">ブログ</a>
        </Link>
        <Link href="/search">
        <a className="">検索</a>
        </Link>
      </h3>
      <h3 className="flex flex-col space-y-1">
        <Link href="/ranking">
        <a className="">ランキング</a>
        </Link>
        <Link href="/setting">
        <a className="token">トークン</a>
        </Link>
      </h3>
      <h3 className="flex flex-col space-y-1">
        <Link href="/setting">
        <a className="">設定</a>
        </Link>
      </h3>
    </footer>
  )
}
export default Footer