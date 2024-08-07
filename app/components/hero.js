import HeroSearch from "./heroSearch"


export default function Hero({locale}) {
    return (
        <div className="flex">
            <div className="hero min-h-35vw" style={{backgroundImage: 'url(/001.webp)'}}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
                    <div className="card bg-orange-600 md:left-27vw">
                        <HeroSearch locale={locale}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
