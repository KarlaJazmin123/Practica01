import React from 'react'
import Link from "next/link";

const navItems=[
    {path:"/general/contact",
     label:"Contactos"},
     {path:"/general/precing",
     label:"precios"},
     {path:"/general/about",
     label: "acerca de"},
    
]

export const Navbar =()=>{
    return(
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={"/"} className="flex items-center">
            <span>Home</span>
            </Link>
            <span>Home</span>

            <div className="flex flex-1"></div>
            {
                navItems.map(navItem=>(
                    <Link
                    key={navItem.path}
                    href={navItem.path}
                    className="mr-2">
                        {navItem.label}
                    </Link>
                ))
            }



            {/*Esta no es lo forma ideal para la navegacion, pero funciona




            <Link className="mr-2" href="/general/contact">Contactos</Link>
            <Link className="mr-2" href="/general/precing">precios</Link>
            <Link className="mr-2" href="/general/about">acerca de</Link>
            
            
            
            <div className="flex flex-1"></div>
            <a className="mr-2" href="/general/contact">Contactos</a>
            <a className="mr-2" href="/general/precing">precios</a>
            <a className="mr-2" href="/general/about">acerca de</a>
            
            
            */}


        </nav>
    )
}