import Image from "next/image";

import type {Metadata} from "next";

export const metadata: Metadata={
    title: "Home Page",
    description: "Esta es mi pagina de precios de los productos",
    keywords: ["Next-js"," Karla Jazmin","Programacion web", "Sistemas computacionles"]
}
/*Primera parte */
export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Mundo desde Next.js...!</span> 
    </div>
  );

}