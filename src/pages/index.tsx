import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`
        flex flex-1 justify-center  
        h-screen w-screen  
      `}
    >
      <div className={`
        navbar flex flex-1 items-start
        flex-col w-full p-5 h-[60%] 
        border border-gray-800 bg-gray-300
        `}>
        <div
          className={`
          flex flex-row justify-between
          w-full
          `}
        >
          <Image className={``}
            src="/images/logistica.png"
            width={128}
            height={128}
            alt="Picture"
          />

          <button
            className={`
          border border-gray-700
          px-5 items-center justify-center
          bg-lime-400 font-bold text-black
          rounded-xl h-8
          `}
          >
            <Link href={"/login"}>Experimente!</Link>
          </button>
        </div>
        <div className={`
          flex flex-1 mt-10 items-start justify-center w-full
        `}>
          <h1 className="font-thin text-black text-3xl">Conheça nosso sistema de gerenciamento de estoque <Link className="text-blue-500" href={"/login"}>gratuito!</Link></h1>
        </div>
      </div>
    </div>
  );
}
