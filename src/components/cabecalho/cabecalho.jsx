import Link from "next/link";

export default function Cabecalho() {
  return (
        <header className="bg-pink-200 h-18">
          <nav className="flex flex-row justify-around">
            <Link className="link-cabecalho" href="/produtos/dinamicos/vestuario/tenis-rosa">Sapatos</Link>
            <Link className="link-cabecalho" href="/produtos/dinamicos/vestuario/camisa-fiap">Vestuário</Link>
            <Link className="link-cabecalho" href="/produtos/dinamicos/vestuario/oculos-virtual">Acessórios</Link>
          </nav>
        </header>
  )
}


