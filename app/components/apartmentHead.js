import { useTranslations } from "next-intl"
import { FaBuilding, FaLayerGroup, FaDoorOpen } from "react-icons/fa";

export default function ApartmentHead({ project_name, block_id, floor_id, apartment_number }) {
  const t = useTranslations("Apartment")
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl mb-8 relative overflow-hidden rounded-b-3xl">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

        <div className="container mx-auto px-6 py-10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
                
                {/* Title Section */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                        {project_name}
                    </h1>
                    <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">{t('premiumResidence')}</p>
                </div>

                {/* Info Pills */}
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-default group">
                        <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400 group-hover:text-orange-300 transition-colors">
                            <FaBuilding className="text-xl" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold">{t('block')}</p>
                            <p className="text-xl font-bold">{block_id}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-default group">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                            <FaLayerGroup className="text-xl" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold">{t('floor')}</p>
                            <p className="text-xl font-bold">{floor_id}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-default group">
                        <div className="p-2 bg-green-500/20 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
                            <FaDoorOpen className="text-xl" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold">{t('apt')}</p>
                            <p className="text-xl font-bold">{apartment_number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
