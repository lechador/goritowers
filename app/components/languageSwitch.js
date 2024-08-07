'use client'

import { useRouter } from "next/navigation"
import '../../public/flags/ka.svg'
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
            <summary className="btn m-1 p-0"><img src={`/flags/${locale}.svg`} /></summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-12 shadow">
                {
                    filteredLocales.map((loc, index) => { 
                        return( 
                            <img key={index} 
                                onClick={() => handleClick(loc)} 
                                src={`/flags/${loc}.svg`} 
                                alt={`${loc}`}
                                className="cursor-pointer" 
                            />
                        )
                    })
                }
            </ul>
        </details>
    );
}