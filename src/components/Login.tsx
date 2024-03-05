import Image from "next/image";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className={`flex flex-1 justify-center items-center`}>
      <div className="flex mt-20">
        <Image
          src="/images/logistica.png"
          width={500}
          height={500}
          alt="Picture"
        />
      </div>
      <div
        className={`
        flex flex-col gap-5
      `}
      >
        <div
          className={`
            flex flex-col gap-2 px-10
            border border-gray-300 mt-20
            h-[500px] bg-gray-50
        `}
        >
          <div
            className={`
                  flex items-center justify-center 
                  h-[200px] flex-col
            `}
          >
            <h1 className="text-5xl font-serif">Stock Manager</h1>

            <p className="max-w-[300px] mt-5 text-pretty text-justify text-xl text-black font-thin">
              Um software de gestão de estoque que te ajudará 
              a gerenciar melhor o seu negócio!
              </p>
          </div>

          <Input
            type={"text"}
            placeholder={"Telefone, nome de usuário ou Email"}
          />

          <Input type={"password"} placeholder={"Senha"} />
          <Button title={"Entrar"} rounded={"md"} margin={"mt-3"} />
          <div className="items-center justify-between">
            <div
              className={`
              border border-gray-200-200  items-center
              `}
            />
            <div
              className={`
                flex items-center justify-center
                font-black
                `}
            >
              ou
            </div>
            <div className="flex flex-col justify-center items-center">
              
                <Link href={"#"} className={`
                 text-red-600 flex flex-row
                justify-center items-center border border-gray-300
                px-4 py-2 rounded-3xl gap-5 text-lg h-8
                `}>
                  Entrar com  
                  <Image
                  src="/images/google_logo.png"
                  width={80}
                  height={20} 
                  alt="Icone do Facebook" />
                </Link>
              
              <span className="mt-2">
                <Link href={"#"} className="text-blue-900">
                  Esqueceu a Senha?
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div
          className={`
          flex flex-1 border border-gray-300
          items-center justify-center p-7
          bg-gray-50
          
        `}
        >
          <h1 className="text-xl font-bold">
            Não tem uma conta?{" "}
            <Link href={"/"} className="text-blue-400">
              Cadastre-se
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
