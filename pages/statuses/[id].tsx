import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from "next";
import Image from "next/image"
import router from "next/router"

type InfuluencerProps = { id: string; lang: string}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<InfuluencerProps>> => {
    // context経由でブラウザから送信されたパラメーターを受け取る
    const { id, lang } = context.query

    // 受け取ったパラメーターが意図した型でなければnotfoundページとして処理する
    if (typeof id !== 'string') {
      return { notFound: true }
    }
    if (typeof lang !== 'string') {
      return { notFound: true }
    }
  
    // 受け取ったパラメータに問題がなければStatusPagePropsを返す
    return { props: { id, lang } }
  }
  

export const Infuluencer: NextPage<InfuluencerProps> = (props)=>{
  return (
    <div>
       このページのIDは{props.id}で言語は{props.lang}です
    </div>
  )
}
export default Infuluencer