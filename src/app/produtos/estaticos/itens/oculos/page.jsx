import Image from "next/image";
import Link from "next/link";
export default function Oculos({params}) {
return (
<>
<div>
<p>O valor é : {params.oculos}</p>
</div>
</>
)
}
