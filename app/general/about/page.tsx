import type {Metadata} from "next";

export const metadata: Metadata={
    title: "Contact About",
    description: "Esta es de acerca de nosotros....",
}


export default function About() {
    return (
        <>
        <span className="text-7xl">Pagina acerca de.</span>
        </>
    )

}