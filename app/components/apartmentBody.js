'use client'

import { useTranslations } from "next-intl"

export default function ApartmentBody({ apartment_area, living_area, balcony_area, apartment_render_image, living_room_and_kitchen_area, toilet_area, bedroom_area, second_bedroom_area, third_bedroom_area }) {
  const t = useTranslations("Apartment")
  return (
    <div className="flex flex-col md:flex-row md:px-10 w-full justify-around items-center py-6">
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog" style={{ zIndex: '1001' }}>
        <div className="modal-box !max-h-screen h-screen max-w-fit py-0">
          <div className="flex flex-col md:flex-row"> 
            <img src={apartment_render_image} alt="image" className="md:h-screen" />
            <div className="flex flex-col justify-center"> 
              <div className="flex flex-col mb-4 text-xl"> 
                <span>{t("aptArea")}: {apartment_area} {t("unit")}<sup>2</sup></span>
                <span>{t("livingArea")}: {living_area} {t("unit")}<sup>2</sup></span>
                <span>{t("balconyArea")}: {balcony_area} {t("unit")}<sup>2</sup></span>
              </div>
              <hr />
              <div className="flex flex-col mt-4 text-xl">
                <span>{t("livingKitchen")}: {living_room_and_kitchen_area}{t("unit")}<sup>2</sup></span>
                <span>{t("bathroom")}: {toilet_area} {t("unit")}<sup>2</sup></span>
                <span>{t("bedroom")}: {bedroom_area} {t("unit")}<sup>2</sup></span>
                {
                  second_bedroom_area && second_bedroom_area > 0 ? (
                    <span>{t("second")} {t("bedroom")}: {second_bedroom_area} {t("unit")}<sup>2</sup></span>
                  ) : (
                    <span></span>
                  )
                }
                {
                  third_bedroom_area && third_bedroom_area > 0 ? (
                    <span>{t("third")} {t("bedroom")}: {third_bedroom_area} {t("unit")}<sup>2</sup></span>
                  ) : (
                    <span></span>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
        <div className="w-full md:w-1/2">
          <div className="card w-full shadow-xl my-4" data-theme="dark">
            <div className="card-body">
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl md:text-3xl">
                    {apartment_area} {t("unit")}<sup>2</sup>
                  </span>
                  <span className="text-orange-500 font-bold text-center">
                    {t("aptArea")}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl md:text-3xl">
                    {living_area} {t("unit")}<sup>2</sup>
                  </span>
                  <span className="text-orange-500 font-bold text-center">
                    {t("livingArea")}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl md:text-3xl">
                    {balcony_area} {t("unit")}<sup>2</sup>
                  </span>
                  <span className="text-orange-500 font-bold text-center">
                    {t("balconyArea")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-full shadow-xl my-4" data-theme="garden">
            <div className="card-body">
              <div className="flex flex-col text-center">
                <span className="text-xl">{t("livingKitchen")}: <span className="text-orange-500 font-bold">{living_room_and_kitchen_area}{t("unit")}<sup>2</sup></span></span>
                <span className="text-xl">{t("bathroom")}: <span className="text-orange-500 font-bold">{toilet_area} {t("unit")}<sup>2</sup></span></span>
                <span className="text-xl">{t("bedroom")}: <span className="text-orange-500 font-bold">{bedroom_area} {t("unit")}<sup>2</sup></span></span>
                {
                  second_bedroom_area && second_bedroom_area > 0 ? (
                    <span className="text-xl">{t("second")} {t("bedroom")}: <span className="text-orange-500 font-bold">{second_bedroom_area} {t("unit")}<sup>2</sup></span></span>
                  ) : (
                    <span></span>
                  )
                }
                {
                  third_bedroom_area && third_bedroom_area > 0 ? (
                    <span className="text-xl">{t("third")} {t("bedroom")}: <span className="text-orange-500 font-bold">{third_bedroom_area} {t("unit")}<sup>2</sup></span></span>
                  ) : (
                    <span></span>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
        <label htmlFor="my_modal_7" className="btn">
          <img
            src={apartment_render_image}
            alt="image"
            className=''
          />
        </label>
        </div>
      </div>
  )
}