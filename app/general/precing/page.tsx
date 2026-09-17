import type {Metadata} from "next";

export const metadata: Metadata={
    title: "Pagina de precios",
    description: "Esta es mi pagina de precios de los productos",
}

export default function Precing() {
    return (
        <>
        <span className="text-7xl">Esta es mi pagina de precios de los productos.</span>
        </>
    )

}