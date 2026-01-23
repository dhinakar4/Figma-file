function Offers() {
  return (
    <div className="px-3 md:!px-12 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div
          className="relative rounded-xl overflow-hidden bg-cover bg-center text-white p-6 flex flex-col items-center text-center min-h-[420px]"
          style={{ backgroundImage: "url(/public/img1.png)" }}
        >
          <div className="items-center">
            <p className="text-xs uppercase tracking-wide">
              Best Deals
            </p>
            <h1 className="text-3xl font-bold mt-2">
              Sale of the Month
            </h1>

            <div className="flex gap-2 justify-center text-sm">
              <div><span className="text-xl flex gap-2">00 <span>:</span></span>
                Days
              </div>
              <div><span className="text-xl flex gap-2">02 <span>:</span></span>
                <p>Hours</p>
              </div>
              <div><span className="text-xl flex gap-2">18 <span>:</span></span>
                <p>Mins</p>
              </div>
              <div><span className="text-xl">46</span>
                <p>Secs</p>
              </div>
            </div>
          </div>

          <button className="bg-white text-green-600 px-6 py-2 !rounded-full w-fit">
            Shop Now →
          </button>
        </div>

        {/* CARD 2 */}
        <div
          className="relative rounded-xl overflow-hidden bg-cover bg-center text-white p-6 flex flex-col items-center text-center min-h-[420px]"
          style={{ backgroundImage: "url(/public/img2.png)" }}
        >
          <div>
            <p className="text-xs uppercase">
              85% Fat Free
            </p>
            <h1 className="text-3xl font-bold mt-2">
              Low-Fat Meat
            </h1>
            <p className="p-2">
              Started at <span className="text-orange-400">$79.99</span>
            </p>
          </div>

          <button className="bg-white text-center text-green-600 px-6 py-2 !rounded-full w-fit">
            Shop Now →
          </button>
        </div>

        {/* CARD 3 */}
        <div
          className="relative rounded-xl overflow-hidden bg-cover bg-center text-black p-6 flex flex-col items-center text-center min-h-[420px]"
          style={{ backgroundImage: "url(/public/img3.png)" }}
        >
          <div>
            <p className="text-xs uppercase">
              Summer Sale
            </p>
            <h1 className="text-3xl font-bold mt-2">
              100% Fresh Fruit
            </h1>
            <span>Up to
              <span className="inline-block ms-2 bg-black text-yellow-400 px-3 py-1 rounded">
                64% OFF
              </span>
            </span>
          </div>

          <button className="bg-white text-green-600 px-6 py-2 !rounded-full w-fit mt-3">
            Shop Now →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Offers;
