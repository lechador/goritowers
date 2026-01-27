import HeroSearch from "./heroSearch"


export default function Hero({locale}) {
    return (
        <div className="flex justify-center w-full">
            <div className="hero min-h-[600px] w-full" style={{backgroundImage: 'url(/001.webp)'}}>
                <div className="hero-overlay bg-black/30"></div>
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-center items-center gap-10">
                    <div className="md:ml-auto">
                        <HeroSearch locale={locale}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
