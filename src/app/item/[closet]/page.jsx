import Image from "next/image";
import Link from 'next/link';

export default function GuardaRoupa({params}) {
return (
    <>
        
        <figure >

                <Image src={`/img/${params.closet}.jpg`} alt="Closet" 
                    width={320} height={320}></Image>
                <h1>{params.closet}</h1>
        </figure>

        <p> <Link href="/"> Volte a página <strong>Home</strong></Link></p>
    </>
    )
}
