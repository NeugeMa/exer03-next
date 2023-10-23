import Image from "next/image";
import Link from "next/link";

export default function Camisas({params}) {
  return (
<> 
            <div>
                    <p>O valor é : {params.camisas}</p>
                </div>
        </>
  ); 
}
