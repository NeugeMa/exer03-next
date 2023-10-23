import Image from "next/image";
import Link from "next/link";

export default function Camisas({params}) {
  return (
    <div>
        <h1>Madress Dados</h1>
        <div>
            <p>O valor é : {params.camisa}</p>
            <p> <Link href="/"> Volte a página <strong>Home</strong></Link></p>
        </div>
    </div>
  ); 
}
