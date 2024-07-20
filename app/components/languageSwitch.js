'use client'

import { useRouter } from "next/navigation"

export default function LocaleSwitcher({locale}) {
    const router = useRouter()
    const locales = ["ka", "en", "ru"]
    const filteredLocales = locales.filter(function(item) {
        return item !== locale
    })
    const handleClick = (loc) => { 
        router.replace(`/${loc}`)
    }
    return (
        <details className="dropdown">
            <summary className="btn m-1">{locale}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {
                    filteredLocales.map((loc, index) => { 
                        return( 
                            <li onClick={() => handleClick(loc)} key={index}><a>{loc}</a></li> 
                        )
                    })
                }
            </ul>
        </details>
    );
}