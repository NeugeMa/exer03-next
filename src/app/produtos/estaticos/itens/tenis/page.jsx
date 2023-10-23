import Link from "next/link";

export default function Tenis({params}) {
  return (
    <> 
          <div>
              <p>O valor é : {params.tenis}</p>
          </div>

          
        <p> <Link href="/"> Volte a página <strong>Home</strong></Link></p>
    </>
  )
}
