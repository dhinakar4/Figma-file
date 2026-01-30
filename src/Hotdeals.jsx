import React, { useState } from "react";
import img1 from "../public/hotdeals/img1.png";
import img2 from "../public/hotdeals/img2.png";
import img3 from "../public/hotdeals/img3.png";
import img4 from "../public/hotdeals/img4.png";
import img5 from "../public/hotdeals/img5.png";
import img6 from "../public/hotdeals/img6.png";
import img7 from "../public/hotdeals/img7.png";
import img8 from "../public/hotdeals/img8.png";
import img9 from "../public/hotdeals/img9.png";
import img10 from "../public/hotdeals/img10.png";
import img11 from "../public/hotdeals/img11.png";
import img12 from "../public/hotdeals/img12.png";
import img13 from "../public/hotdeals/img13.png";
import img14 from "../public/hotdeals/img14.png";
import img15 from "../public/hotdeals/img15.png";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function useCountdown(targetTime) {
    const calc = () => {
        const end = new Date(targetTime).getTime();
        const now = Date.now();
        const diff = Math.max(0, end - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        return { diff, days, hours, mins, secs };
    };

    const [t, setT] = React.useState(calc);

    React.useEffect(() => {
        if (!targetTime) return;
        const id = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(id);
    }, [targetTime]);

    return t;
}

const OfferTimer = ({ endTime }) => {
    const { diff, days, hours, mins, secs } = useCountdown(endTime);

    if (diff === 0) {
        return (
            <p className="text-xs text-gray-500 mt-3 text-center">
                Offer ended
            </p>
        );
    }

    return (
        <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Hurry up! Offer ends in:</p>

            <div className="flex justify-center gap-3 mt-2 font-bold text-gray-900 text-md">
                <div>
                    {String(days).padStart(2, "0")}
                    <div className="text-[10px] text-gray-400 font-medium">DAYS</div>
                </div>
                <span>:</span>
                <div>
                    {String(hours).padStart(2, "0")}
                    <div className="text-[10px] text-gray-400 font-medium">HOURS</div>
                </div>
                <span>:</span>
                <div>
                    {String(mins).padStart(2, "0")}
                    <div className="text-[10px] text-gray-400 font-medium">MINS</div>
                </div>
                <span>:</span>
                <div>
                    {String(secs).padStart(2, "0")}
                    <div className="text-[10px] text-gray-400 font-medium">SECS</div>
                </div>
            </div>
        </div>
    );
};



function Hotdeals() {
    const [hoveredId, setHoveredId] = useState(null); // default featured = first

    const categories = [
        { id: 1, title: "Green Apple", image: img1, price: "$12.00", oldprice: "$24.00", rating: 4, offerEnd: "2026-01-30T18:30:00", best: true },
        { id: 2, title: "Chinese cabbage", image: img2, price: "$12.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00" },
        { id: 3, title: "Green Lettuce", image: img3, price: "$9.00", oldprice: "$18.00", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true },
        { id: 4, title: "Eggplant", image: img4, price: "$34.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00" },
        { id: 5, title: "Fresh Cauliflower", image: img5, price: "$12.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", best: true },
        { id: 6, title: "Green Capsicum", image: img6, price: "$9.00", oldprice: "$20.99", rating: 4, offerEnd: "2026-01-30T18:30:00", best: true },
        { id: 7, title: "Green Chilli", image: img7, price: "$34.00", oldprice: "$74.00", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true },
        { id: 8, title: "Big Potatoes", image: img8, price: "$12.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", },
        { id: 9, title: "Corn", image: img9, price: "$12.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00" },
        { id: 10, title: "Red Capsium", image: img10, price: "$12.00", oldprice: "$24.00", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true },
        { id: 11, title: "Red Tomatoes", image: img11, price: "$9.00", oldprice: "$20.99", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true },
        { id: 12, title: "Surjapur Mango", image: img12, price: "$34.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", },
        { id: 13, title: "Green Cucumber", image: img13, price: "$15.99", oldprice: "$30.00", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true },
        { id: 14, title: "Ladies Finger", image: img14, price: "$14.99", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", },
        { id: 15, title: "Red Chilli", image: img15, price: "$14.99", oldprice: "$28.00", rating: 4, offerEnd: "2026-01-30T18:30:00", best: true },
    ];

    return (
        <div className="px-3 md:!px-12 lg:!px-20 mt-5 p-4">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold">Hot Deals</h3>
                <span className="text-green-600 text-sm font-medium cursor-pointer hover:underline">
                    View All →
                </span>
            </div>

            {/* GRID SECTION (same as screenshot) */}
            <div
                className="
          grid gap-0 bg-white border border-gray-100
          grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5
          overflow-visible
        "
                style={{ gridAutoFlow: "dense" }}
                onMouseLeave={() => setHoveredId(null)}
            >
                {categories.map((item) => {
                    const isFeatured = hoveredId === item.id;

                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHoveredId(item.id)}
                            className={[
                                "relative border border-gray-200 bg-white transition-all duration-300 group ",
                                isFeatured ? "lg:col-span-2 lg:row-span-2 z-20" : "z-10",
                                isFeatured ? "hover:ring-1 hover:!border-green-600/40 shadow-[0_0_30px_rgba(34,197,94,0.25)] border-green-400 " : "",
                            ].join(" ")}
                        >
                            {/* TAGS */}
                            {(item.sale || item.best) && (
                                <div className="absolute top-3 left-3 z-30 flex gap-2">
                                    {item.sale && (
                                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Sale 50%</span>
                                    )}
                                    {item.best && (
                                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Best Sale</span>
                                    )}
                                </div>
                            )}

                            {/* IMAGE AREA */}
                            <div className={isFeatured ? "p-4 sm:p-5 lg:p-6" : "p-3 sm:p-4"}>
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={[
                                            "w-full object-contain transition-transform duration-300",
                                            isFeatured ? "h-[200px] sm:h-[240px] lg:h-[260px] scale-110" : "h-[150px] sm:h-[170px] lg:h-[180px]",
                                        ].join(" ")}
                                    />

                                    {isFeatured && (
                                        <div className="mt-4 flex items-center justify-center gap-3">
                                            <button className="w-11 h-11 !rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition flex items-center justify-center">
                                                <IoIosHeartEmpty size={20} />
                                            </button>

                                            <button className="!px-3 sm:!px-10 md:!px-16 lg:!px-24 py-2 md:!py-3 bg-green-600 text-white !text-xs md:!text-md !rounded-full font-semibold flex items-center gap-2">
                                                Add to Cart <HiOutlineShoppingBag size={18} />
                                            </button>

                                            <button className="w-11 h-11 !rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition flex items-center justify-center">
                                                <IoEyeOutline size={20} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* INFO */}
                            <div className={isFeatured ? "px-6 pb-6" : "px-4 pb-4"}>
                                {/* TITLE (only title center on featured) */}
                                <span
                                    className={
                                        isFeatured
                                            ? "block text-green-700 font-medium text-center"
                                            : "block text-sm text-gray-600"
                                    }
                                >
                                    {item.title}
                                </span>

                                {/* PRICE ROW */}
                                <div
                                    className={
                                        isFeatured
                                            ? "mt-2 flex justify-center text-center"
                                            : "mt-1 flex items-center justify-between text-left"
                                    }
                                >
                                    <span className="font-semibold text-gray-900 text-sm">
                                        {item.price}
                                        {item.oldprice && (
                                            <span className="text-gray-400 text-xs ms-1 line-through">
                                                {item.oldprice}
                                            </span>
                                        )}
                                    </span>

                                    {/* SHOP ICON → ONLY NORMAL STATE */}
                                    {!isFeatured && (
                                        <button className="p-2 !rounded-full bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white transition">
                                            <HiOutlineShoppingBag size={16} />
                                        </button>
                                    )}
                                </div>


                                {/* RATING (left) */}
                                <div className={isFeatured ? "mt-2 flex justify-center" : "mt-2"}>
                                    <Stars rating={item.rating} />
                                </div>

                                {/* OFFER TIMER (only featured/hover) */}
                                {hoveredId === item.id && item.offerEnd && (
                                    <OfferTimer endTime={item.offerEnd} />
                                )}
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Hotdeals;

const Stars = ({ rating }) => {
    return (
        <div className="flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= rating ? "text-orange-500 text-sm" : "text-gray-300 text-sm"}
                >
                    ★
                </span>
            ))}
        </div>
    );
};
