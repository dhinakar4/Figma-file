import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Topbar from "./Topbar";
import Menubar from "./Menubar";
import Blog from "./Blog";
import Footer from "./Footer";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";


function Wishlist() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(stored);
    }, []);

    const removeFromWishlist = (id) => {
        const updated = wishlist.filter(item => item.id !== id);
        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
        window.dispatchEvent(new Event("wishlistUpdated"));
    };

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));

        // ✅ UX: remove from wishlist after add
        removeFromWishlist(product.id);
    };

    return (

        <div>
            <Topbar />
            <Menubar />

            <div className="px-3 md:!px-12 lg:!px-20 py-10">
                <h2 className="text-2xl font-semibold mb-5 text-center">
                    My Wishlist
                </h2>

                {wishlist.length === 0 ? (
                    <p className="text-center text-gray-500 py-20">
                        Your wishlist is empty
                    </p>
                ) : (
                    <div className="border rounded-md overflow-hidden">
                        {/* HEADER (hide on mobile) */}
                        <div className="hidden md:grid grid-cols-12 px-4 py-3 text-xs text-gray-500 font-semibold">
                            <div className="col-span-5">PRODUCT</div>
                            <div className="col-span-2">PRICE</div>
                            <div className="col-span-3">STOCK STATUS</div>
                            <div className="col-span-2 text-right"></div>
                        </div>

                        {/* ROWS */}
                        {wishlist.map(item => {
                            const inStock = item.inStock !== false;

                            return (
                                <div
                                    key={item.id}
                                    className="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:!gap-0 px-4 py-3 border-t border-gray-200 items-center text-start"
                                >
                                    {/* PRODUCT */}
                                    <div className="md:col-span-5 flex flex-col md:flex-row items-center gap-3 text-center md:!text-left">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-40 md:w-14 md:h-14 object-contain rounded"
                                        />
                                        <span className="text-md font-medium">
                                            {item.title}
                                        </span>
                                    </div>

                                    {/* PRICE */}
                                    <div className="md:col-span-2 text-sm font-semibold text-center md:!text-left">
                                        {item.price}
                                        {item.oldprice && (
                                            <span className="text-gray-400 line-through ml-2 text-xs">
                                                {item.oldprice}
                                            </span>
                                        )}
                                    </div>

                                    {/* STOCK */}
                                    <div className="md:col-span-3 text-center md:!text-left">
                                        {inStock ? (
                                            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-md">
                                                In Stock
                                            </span>
                                        ) : (
                                            <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-md">
                                                Out of Stock
                                            </span>
                                        )}
                                    </div>

                                    {/* ACTION */}
                                    <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-2 md:justify-end">
                                        <button
                                            disabled={!inStock}
                                            onClick={() => addToCart(item)}
                                            className={`px-4 py-2 text-xs !rounded-full font-semibold flex items-center gap-1
                                            ${inStock
                                                    ? "bg-green-500 hover:bg-green-600 text-white"
                                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                                }`}
                                        >
                                            <HiOutlineShoppingBag size={14} />
                                            Add to Cart
                                        </button>

                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="text-gray-400 hover:text-red-500  border !rounded-full 
                                            absolute top-2 right-2 md:static ms-0 sm:!ms-3"
                                        >
                                            <IoClose size={12} />
                                        </button>
                                    </div>
                                </div>


                            );
                        })}

                        <hr className="border-t !border-gray-400" />

                        <div className="flex flex-wrap items-center justify-center md:!justify-start text-center px-4 pb-3 font-semibold">
                            Share:
                            <span className="flex gap-1">
                                {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map(
                                    (Icon, idx) => (
                                        <div
                                            key={idx}
                                            className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500 cursor-pointer transition"
                                        >
                                            <Icon size={14} />
                                        </div>
                                    )
                                )}
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <Blog />
            <Footer />
        </div>
    );
}

export default Wishlist;