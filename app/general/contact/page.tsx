import type {Metadata} from "next";

export const metadata: Metadata={
    title: "Conact Page",
    description: "Esta es la pagina de contacto",
}


export default function Contact() {
    return (
        <>
        <span className="text-7xl">Pagina de contacto.</span>
        </>
    )

}