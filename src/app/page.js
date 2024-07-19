import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
  <div className="oswald">Hola Mundo</div>
  <Link href="/fleets">Fleets</Link>
   </div>
  );
}
