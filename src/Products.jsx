import img1 from '../public/products/img1.png';
import img2 from '../public/products/img2.png';
import img3 from '../public/products/img3.png';
import img4 from '../public/products/img4.png';
import img5 from '../public/products/img5.png';
import img6 from '../public/products/img6.png';
import img7 from '../public/products/img7.png';
import img8 from '../public/products/img8.png';
import img9 from '../public/products/img9.png';
import img10 from '../public/products/img10.png';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";



function Products() {
    const categories = [
        { id: 1, title: "Green Apple", image: img1, price: "$14.99", oldprice: "$20.99", rating: 4 },
        { id: 2, title: "Fresh Indian Malta", image: img2, price: "$14.99", oldprice: "", rating: 4 },
        { id: 3, title: "Chinese Cabbage", image: img3, price: "$14.99", oldprice: "", rating: 4 },
        { id: 4, title: "Green Lattuce", image: img4, price: "$14.99", oldprice: "", rating: 4 },
        { id: 5, title: "Eggplant", image: img5, price: "$14.99", oldprice: "", rating: 4 },
        { id: 6, title: "Big Potatoes", image: img6, price: "$14.99", oldprice: "", rating: 4 },
        { id: 7, title: "Corn", image: img7, price: "$14.99", oldprice: "", rating: 4 },
        { id: 8, title: "Fresh Cauliflower", image: img8, price: "$14.99", oldprice: "", rating: 4 },
        { id: 9, title: "Green Capsicum", image: img9, price: "$14.99", oldprice: "$20.99", rating: 4 },
        { id: 10, title: "Green Chilli", image: img10, price: "$14.99", oldprice: "", rating: 4 },
    ];

    return (
        <div className="px-3 md:!px-12 mt-5">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                    Popular Products
                </h3>
                <span className="text-green-500 text-sm font-medium cursor-pointer hover:underline mb-2">
                    View All →
                </span>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {categories.map((item, index) => (
                    <div
                        key={item.id}
                        className="p-2 sm:p-3 border border-gray-200 relative
                            hover:!border-green-600 group
                            hover:ring-1 hover:ring-green-600/40
                            hover:shadow-[0_0_15px_rgba(34,197,94,0.35)]
                            transition-all duration-300 cursor-pointer">

                        {(index === 0 || index === 8) && (
                            <span className="absolute top-3 left-3 
                              bg-red-500 text-white text-xs px-2 py-1 rounded-sm">
                                SALE 50%
                            </span>
                        )}

                        <div className='absolute right-2 hidden group-hover:block'>
                            <button className='px-2 py-2 block'>
                                <CiHeart size={28} className='bg-white p-1 !rounded-full border' />
                            </button>
                            <button className='px-2 block'>
                                <IoEyeOutline size={28} className='bg-white p-1 !rounded-full border' />
                            </button>
                        </div>


                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-28 sm:h-32 md:h-36 lg:h-50 object-cover rounded-md" />

                        <div className="flex items-start justify-between px-2">

                            <div className="gap-2 items-start">
                                <span className="block mt-1 text-xs md:text-sm text-gray-600 items-start group-hover:text-green-600">
                                    {item.title}
                                </span>
                                <span className="text-gray-700 font-semibold text-xs md:text-sm">
                                    {item.price}
                                </span>
                                {item.oldprice && (
                                    <span className="text-gray-400 ms-1 font-semibold text-xs md:text-sm line-through">
                                        {item.oldprice}
                                    </span>
                                )}

                                <Stars rating={item.rating} />

                            </div>


                            <button className='hidden md:flex p-2 mt-2 group-hover:bg-green-500 group-hover:text-white !rounded-full'>
                                <HiOutlineShoppingBag size={18} />
                            </button>


                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Products;

const Stars = ({ rating }) => {
    return (
        <div className="flex items-start gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={
                        star <= rating
                            ? "text-yellow-500 text-sm"
                            : "text-gray-300 text-sm"
                    }
                >
                    ★
                </span>
            ))}
        </div>
    );
};
