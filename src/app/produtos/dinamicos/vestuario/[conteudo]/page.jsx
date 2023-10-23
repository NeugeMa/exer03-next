import Image from "next/image";
import Link from "next/link";

export default function Conteudo({params}) {
  return (
    <> 
      <h1> <strong> MaDress</strong></h1>
              <div>
                  <p>O valor é : {params.conteudo}</p>
              </div>
                <p> <Link href="/"> Volte a página <strong>Home</strong></Link></p>

                <figure> 
                <Image src="/img/risos.png"
                  alt="Imagem sorrindo"
                  width={500}
                  height={500} /> 
              </figure>
    </>
  )
}
