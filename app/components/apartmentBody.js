
export default function ApartmentBody({ apartment_area, living_area, balcony_area, apartment_render_image, living_room_and_kitchen_area, toilet_area, bedroom_area, second_bedroom_area, third_bedroom_area }) {
  return (
    <div className="flex flex-col md:flex-row md:px-10 w-full justify-around items-center py-6">
        <div className="w-full md:w-4/6">
          <div className="card w-full shadow-xl my-4" data-theme="dark">
            <div className="card-body">
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl md:text-3xl">
                    {apartment_area} მ<sup>2</sup>
                  </span>
                  <span className="text-orange-500 font-bold text-center">
                    ბინის ფართი
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl md:text-3xl">
                    {living_area} მ<sup>2</sup>
                  </span>
                  <span className="text-orange-500 font-bold text-center">
                    საცხოვრებელი ფართი
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl md:text-3xl">
                    {balcony_area} მ<sup>2</sup>
                  </span>
                  <span className="text-orange-500 font-bold text-center">
                    აივნის ფართი
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-full shadow-xl my-4" data-theme="garden">
            <div className="card-body">
              <div className="flex flex-col text-center">
                <span className="text-xl">მისაღები / სამზარეულო: <span className="text-orange-500 font-bold">{living_room_and_kitchen_area}მ<sup>2</sup></span></span>
                <span className="text-xl">სველი წერტილი: <span className="text-orange-500 font-bold">{toilet_area} მ<sup>2</sup></span></span>
                <span className="text-xl">საძინებელი: <span className="text-orange-500 font-bold">{bedroom_area} მ<sup>2</sup></span></span>
                {
                  second_bedroom_area && second_bedroom_area > 0 ? (
                    <span className="text-xl">მეორე საძინებელი: <span className="text-orange-500 font-bold">{second_bedroom_area} მ<sup>2</sup></span></span>
                  ) : (
                    <span></span>
                  )
                }
                {
                  third_bedroom_area && third_bedroom_area > 0 ? (
                    <span className="text-xl">მესამე საძინებელი: <span className="text-orange-500 font-bold">{third_bedroom_area} მ<sup>2</sup></span></span>
                  ) : (
                    <span></span>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/6">
          <img src={apartment_render_image} alt="image" />
        </div>
      </div>
  )
}
