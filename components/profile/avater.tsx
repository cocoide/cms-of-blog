import Image from "next/image";

type Props = {
    src: string;
  };
  
  const Avatar = ({ src }: Props) => {
    if (src) {
      return <Image src={src} 
      width={10} height={10}
      className="block rounded-full" alt="" />;
    } else {
      return <div className="w-10 h-10 bg-indigo-200 rounded-full"></div>;
    }
  };
  
  export default Avatar;