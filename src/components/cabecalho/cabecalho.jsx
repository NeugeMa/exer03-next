import Link from "next/link";

export default function Cabecalho() {
  return (
        <header className="bg-pink-200 h-18">
          <nav className="flex flex-row justify-around">
            <Link className="link-cabecalho" href="/item/sapato">Sapatos</Link>
            <Link className="link-cabecalho" href="/item/camisa">Camisetas</Link>
            <Link className="link-cabecalho" href="/item/calca  ">Carsolas</Link>
            <Link className="link-cabecalho" href="/item/oculos">Acessórios</Link>
            <Link className="link-cabecalho" href="/item/bone">Itens Cabeça</Link>
          </nav>
        </header>
  )
}


