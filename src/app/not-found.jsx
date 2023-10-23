import Link from "next/link";
export default function NotFoun() {
return (
<>
<h1> <strong> OOPS! 404 </strong></h1>
<p> parece que você está tentando acessar uma página que não existe! </p>
<p> <Link href="/"> Volte a página <strong>Home</strong> antes que você se perca!</Link></p>
</>
)
}
