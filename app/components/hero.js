import HeroSearch from "./heroSearch"


export default function Hero() {
    return (
        <div className="flex">
            <div className="hero min-h-35vw" style={{backgroundImage: 'url(/0.jpg)'}}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
                    <div className="card glass left-27vw">
                        <HeroSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}
