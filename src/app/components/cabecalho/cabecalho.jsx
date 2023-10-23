import Link from "next/link";

export default function Cabecalho() {
  return (
        <header className="bg-pink-200 h-18">
          <nav className="flex flex-row justify-around">
            <Link className="link-cabecalho" href="/produtos/estaticas/tenis">...</Link>
            <Link className="link-cabecalho" href="/produtos/dinamicas/estranho/tenis-preto">...</Link>
            <Link className="link-cabecalho" href="/produtos/dinamicas/vestuario/camisa-xadrez">...</Link>
          </nav>
        </header>
  )
}
