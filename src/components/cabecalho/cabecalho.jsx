import Link from "next/link";

export default function Cabecalho() {
  return (
        <header className="bg-pink-200 h-18">
          <nav className="flex flex-row justify-around">
            <Link className="link-cabecalho" href="/">Sapatos</Link>
            <Link className="link-cabecalho" href="/">Camisetas</Link>
            <Link className="link-cabecalho" href="/">Carsolas</Link>
            <Link className="link-cabecalho" href="/">Acessórios</Link>
            <Link className="link-cabecalho" href="/">Itens Cabeça</Link>
          </nav>
        </header>
  )
}


