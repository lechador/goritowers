
export default function ApartmentBody({ apartment_price, apartment_area, living_area, balcony_area, apartment_render_image }) {
  return (
    <div className="flex flex-col md:flex-row md:px-10 w-full justify-around items-center py-6">
        <div className="w-full md:w-4/6">
          <div className="card w-full shadow-xl my-4" data-theme="garden">
            <div className="card-body">
              {/* <div className="flex flex-row justify-evenly">
                <div className="flex flex-col items-center">
                  <span className="text-orange-500 font-bold">ბინის ფასი</span>
                  <div className="flex flex-row">
                    <span className="font-bold text-2xl md:text-3xl">
                      {apartment_price.toLocaleString('en-US', 
                        { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 })
                      }
                    </span>
                    <span className="font-bold text-2xl md:text-3xl relative bottom-0.5">
                      ₾
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-orange-500 font-bold">კვ.მ. ფასი</span>
                  <div className="flex flex-row">
                    <span className="font-bold text-2xl md:text-3xl">
                      {Math.round(apartment_price/apartment_area)}
                    </span>
                    <span className="font-bold text-2xl md:text-3xl relative bottom-0.5">
                      ₾
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
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
        </div>
        <div className="w-full md:w-2/6">
          <img src={apartment_render_image} alt="image" />
        </div>
      </div>
  )
}
