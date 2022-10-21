import Head from "next/head"

const profile = () => {
  return (
    <>
    <Head>
        <title>PROFILE</title>
        <meta name="description" content="profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2 className="text-center md:text-3xl text-lg"
    >PROFILE</h2>
    <div className="md:gap-20 md:p-20 gap-10 p-10 justify-center grid grid-cols-3">
        <div className="bg-gray-400 hover:bg-gray-300 shadow-lg hover:shadow-none rounded-lg text-center container aspect-square"></div>
        <div className="bg-gray-400 shadow-md rounded-lg"></div>
        <div className="bg-gray-400 shadow-md rounded-lg"></div>
        <div className="bg-gray-400 shadow-md rounded-lg aspect-square"></div>
        <div className="bg-gray-400 shadow-md rounded-lg"></div>
        <div className="bg-gray-400 shadow-md rounded-lg"></div>
    </div>
    </>
  )
}
export default profile