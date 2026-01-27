'use client'

import { useTranslations } from "next-intl"
import { FaRulerCombined, FaCouch, FaBath, FaBed, FaExpand, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function ApartmentBody({ apartment_area, living_area, balcony_area, apartment_render_image, living_room_and_kitchen_area, toilet_area, bedroom_area, second_bedroom_area, third_bedroom_area }) {
  const t = useTranslations("Apartment")
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="container mx-auto px-4 pb-20">
      
      {/* Zoom Modal */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle backdrop-blur-md" role="dialog" style={{ zIndex: '1001' }}>
        <div className="modal-box w-11/12 max-w-5xl bg-white p-0 overflow-hidden shadow-2xl rounded-3xl relative">
            <label htmlFor="my_modal_7" className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost bg-white/50 hover:bg-white z-50">✕</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 h-[80vh]">
                <div className="lg:col-span-2 bg-gray-100 flex items-center justify-center p-8">
                    <img src={apartment_render_image} alt="Plan" className="max-h-full max-w-full object-contain drop-shadow-2xl" />
                </div>
                <div className="bg-white p-8 overflow-y-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaRulerCombined className="text-orange-500" />
                        {t("aptArea")}
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-500">{t("aptArea")}</span>
                            <span className="font-bold text-lg text-gray-800">{apartment_area} m²</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-500">{t("livingArea")}</span>
                            <span className="font-bold text-lg text-gray-800">{living_area} m²</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-500">{t("balconyArea")}</span>
                            <span className="font-bold text-lg text-gray-800">{balcony_area} m²</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Image (Plan) */}
        <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 relative group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-6 left-6 z-10">
                    <div className="badge badge-lg bg-orange-500 text-white border-none gap-2 font-bold py-4 px-4 shadow-lg shadow-orange-500/30">
                        {apartment_area} m²
                    </div>
                </div>
                
                <label htmlFor="my_modal_7" className="cursor-zoom-in block relative">
                    <div className="aspect-[4/3] flex items-center justify-center">
                        <img
                            src={apartment_render_image}
                            alt="Apartment Plan"
                            className="max-h-[600px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        <FaExpand className="text-orange-500" /> {t('clickToZoom')}
                    </div>
                </label>
            </div>
        </div>

        {/* Right Column: Details Card */}
        <div className="lg:col-span-4 space-y-6">
            
            {/* Main Stats Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-900 p-6 text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        {t('details')}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1 opacity-80">{t('desc')}</p>
                </div>
                
                <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-orange-50 p-4 rounded-2xl text-center hover:bg-orange-100 transition-colors">
                            <div className="text-orange-500 text-2xl mb-1 flex justify-center"><FaRulerCombined /></div>
                            <div className="text-2xl font-bold text-gray-800">{living_area}</div>
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">{t("livingArea")}</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-2xl text-center hover:bg-blue-100 transition-colors">
                            <div className="text-blue-500 text-2xl mb-1 flex justify-center"><FaExpand /></div>
                            <div className="text-2xl font-bold text-gray-800">{balcony_area}</div>
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">{t("balconyArea")}</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                            <div className="flex items-center gap-3 text-gray-600">
                                <span className="bg-gray-100 p-2 rounded-lg text-gray-500"><FaCouch /></span>
                                <span className="font-medium">{t("livingKitchen")}</span>
                            </div>
                            <span className="font-bold text-gray-800">{living_room_and_kitchen_area} m²</span>
                        </div>

                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                            <div className="flex items-center gap-3 text-gray-600">
                                <span className="bg-gray-100 p-2 rounded-lg text-gray-500"><FaBath /></span>
                                <span className="font-medium">{t("bathroom")}</span>
                            </div>
                            <span className="font-bold text-gray-800">{toilet_area} m²</span>
                        </div>

                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                            <div className="flex items-center gap-3 text-gray-600">
                                <span className="bg-gray-100 p-2 rounded-lg text-gray-500"><FaBed /></span>
                                <span className="font-medium">{t("bedroom")}</span>
                            </div>
                            <span className="font-bold text-gray-800">{bedroom_area} m²</span>
                        </div>

                        {second_bedroom_area > 0 && (
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <span className="bg-gray-100 p-2 rounded-lg text-gray-500"><FaBed /></span>
                                    <span className="font-medium">{t("second")} {t("bedroom")}</span>
                                </div>
                                <span className="font-bold text-gray-800">{second_bedroom_area} m²</span>
                            </div>
                        )}
                        
                        {third_bedroom_area > 0 && (
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <span className="bg-gray-100 p-2 rounded-lg text-gray-500"><FaBed /></span>
                                    <span className="font-medium">{t("third")} {t("bedroom")}</span>
                                </div>
                                <span className="font-bold text-gray-800">{third_bedroom_area} m²</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <button 
                        className="btn btn-primary w-full bg-orange-600 hover:bg-orange-700 border-none text-white shadow-lg shadow-orange-500/30 rounded-xl h-14 text-lg"
                        onClick={()=>document.getElementById('my_modal_4').showModal()}
                    >
                        {t('contactSales')} <FaArrowRight />
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        {t('instantBooking')}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
