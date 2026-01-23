import img1 from "../public/img4.png";

function Summeroffer() {
  return (
    <div className="px-3 md:!px-12 mt-5">
      <div className="bg-black rounded-xl overflow-hidden ">

        <div className="grid grid-cols-1 md:!grid-cols-2 min-h-[260px] md:min-h-[320px]">

          {/* IMAGE */}
          <div className="w-full h-[220px] md:h-full flex items-center justify-center">
            <img
              src={img1}
              alt="Summer Offer"
              className="w-full h-full object-cover object-center sm:!object-center md:!object-center lg:!object-center xl:!object-left"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6 md:!p-10 ms-2 md:!ms-2 lg:!ms-3 xl:!ms-5 flex flex-col justify-center">
            <h6 className="text-white text-sm mb-2">SUMMER SALE</h6>

            <h1 className="text-white font-bold text-3xl md:text-5xl mb-3">
              <span className="text-orange-400">37%</span> OFF
            </h1>

            <p className="text-gray-300 text-sm md:text-base max-w-md">
              Free on all your order, Free Shipping and 30 days
              money-back guarantee
            </p>

            <button className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-2 !rounded-full font-semibold w-fit">
              Shop Now →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Summeroffer;
