import HeroSearch from "./heroSearch"


export default function Hero() {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 bg-cover bg-center hidden md:block" style={{backgroundImage: 'url(/hero.jpg)'}}></div>
            <div className="w-full md:w-1/2 bg-cover bg-center" style={{backgroundImage: 'url(/hero.jpg)'}}>
                <div className="flex items-center justify-center h-full">
                    <div className="card glass">
                        <HeroSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}
