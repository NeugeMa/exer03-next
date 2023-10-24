import Image from "next/image";
import Link from 'next/link';

export default function GuardaRoupa({params}) {


 // Decidimos criar tudo dentro de uma página só como teste, antes trouxemos uma com diversas pastas que simbolizavam cada coisa, mas se 
// tornou algo extremamente bagunçado

    // Um código que gera uma imagem(public) com título (cabecalho) junto de parâmetros 
return (
    <>
        
        <figure> 
            <h1> Seja bem vindo(a)!! A parte de {params.closet} </h1> 
                <Image src={`/img/${params.closet}.jpg`} alt="Closet" // Utilizamos o h1 para adicionarmos um título a página + o parâmetro irá mudar de acordo com a página
                // params.closet | caminho dinâmico para a imagem = params.closet 
                    width={200} height={200}></Image>
        
        </figure>

        <p> <Link href="/"> Volte a página <strong>Home</strong></Link></p>
    </>
    )
}

