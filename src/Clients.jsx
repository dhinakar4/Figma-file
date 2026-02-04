import { useState } from "react";
import { useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import comma from '../public/Vector.png';

const testimonials = [
  { name: "Robert Fox", role: "Customer", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Dianne Russell", role: "Customer", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Eleanor Pena", role: "Customer", image: "https://i.pravatar.cc/100?img=3" },
  { name: "Leslie Alexander", role: "Customer", image: "https://i.pravatar.cc/100?img=4" },
  { name: "Savannah Nguyen", role: "Customer", image: "https://i.pravatar.cc/100?img=5" },
];

export default function ClientTestimonials() {

  // visible cards based on breakpoints:
  const getVisibleCards = () => {
    if (window.innerWidth < 640) return 1;      // mobile
    if (window.innerWidth < 1024) return 2;     // tablet
    return 3;                                   // desktop
  };


  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(getVisibleCards());

  useEffect(() => {
    const onResize = () => {
      setVisible(getVisibleCards());
      setIndex(0); // reset to avoid empty slide
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = testimonials.length - visible;


  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };


  const isPrevDisabled = index === 0;
  const isNextDisabled = index === 1;


  return (
    <div className="px-3 md:!px-8 lg:!px-20 py-12 bg-gray-50 mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Client Testimonials</h2>

        <div className="flex gap-3">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={isPrevDisabled}
            className={`w-10 h-10 !rounded-full flex items-center justify-center border transition
      ${isPrevDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
              }`}
          >
            <IoChevronBack />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={isNextDisabled}
            className={`w-10 h-10 !rounded-full flex items-center justify-center border transition
      ${isNextDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
              }`}
          >
            <IoChevronForward />
          </button>
        </div>

      </div>

      {/* Slider */}
      <div className="overflow-hidden" >
        <div
          className="flex transition-transform duration-[1200ms] ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="flex-none w-full sm:w-1/2 lg:w-1/3 px-3"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <div className="text-green-400 text-4xl mb-4"><img src={comma} alt="" /></div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={item.name}
                    />
                    <div>
                      <span className="block !text-sm font-semibold">{item.name}</span>
                      <span className="text-xs text-gray-400">{item.role}</span>
                    </div>
                  </div>

                  <div className="text-orange-400 text-sm">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
