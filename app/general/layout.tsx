import { Navbar } from "../componets";


export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    return (
        <>

            <Navbar />
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">Programacion web avanzanda</span>
                {children}
            </main>
        </>

    );

}