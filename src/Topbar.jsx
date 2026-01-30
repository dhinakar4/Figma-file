import logo from '../public/logo.png';
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Topbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const [cartTotal, setCartTotal] = useState(0);

    const [cartCount, setCartCount] = useState(0);

    const [wishlistCount, setWishlistCount] = useState(0);

    const handleSearch = () => {
        alert(`Searching for: ${search}`);
    };
    const [openLang, setOpenLang] = useState(false);
    const [openCurr, setOpenCurr] = useState(false);


    useEffect(() => {
        const updateCart = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            const totalQty = cart.reduce(
                (sum, item) => sum + (item.qty || 1),
                0
            );

            const totalPrice = cart.reduce(
                (sum, item) =>
                    sum + parseFloat(item.price.replace("$", "")) * (item.qty || 1),
                0
            );

            setCartCount(totalQty);
            setCartTotal(totalPrice); // ⭐ IMPORTANT
        };

        updateCart(); // initial load

        window.addEventListener("cartUpdated", updateCart);

        return () => {
            window.removeEventListener("cartUpdated", updateCart);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("cart"); // optional
        window.dispatchEvent(new Event("cartUpdated"));
        setIsLoggedIn(false);
        navigate("/");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleCartClick = () => {
        navigate("/cart");
    };

    useEffect(() => {
        const updateWishlist = () => {
            const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
            setWishlistCount(wishlist.length);
        };

        updateWishlist(); // initial load

        window.addEventListener("wishlistUpdated", updateWishlist);

        return () => {
            window.removeEventListener("wishlistUpdated", updateWishlist);
        };
    }, []);


    return (
        <div>
            <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:!items-center sm:justify-between px-3 md:!px-12 lg:!px-20 pt-3">

                {/* LOCATION */}
                <span className="flex items-center mx-auto sm:!mx-0 text-xs sm:text-sm md:text-base text-center">
                    <CiLocationOn size={20} className="mr-1 shrink-0" />
                    <span className="line-clamp-1 sm:line-clamp-none">
                        Store Location: Lincoln-344, Illinois, Chicago, USA
                    </span>
                </span>

                <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end gap-3 text-xs sm:text-sm md:text-base items-center">

                    <span
                        onClick={() => setOpenLang(!openLang)}
                        className="flex items-center gap-1 cursor-pointer">
                        ENG
                        <IoIosArrowDown
                            className={`transition-transform ${openLang ? "rotate-180" : ""}`} />
                    </span>

                    <span
                        onClick={() => setOpenCurr(!openCurr)}
                        className="flex items-center gap-1 cursor-pointer">
                        USD
                        <IoIosArrowDown
                            className={`transition-transform ${openCurr ? "rotate-180" : ""}`} />
                    </span>

                    {/* DIVIDER (hide on mobile) */}
                    <span className="hidden sm:block h-4 w-px bg-gray-300"></span>

                    {/* AUTH */}
                    {!isLoggedIn ? (
                        <span
                            onClick={() => navigate("/login")}
                            className="cursor-pointer hover:text-green-600"
                        >
                            Sign In / Sign Up
                        </span>
                    ) : (
                        <div className="flex items-center gap-2">
                            <span
                                onClick={handleLogout}
                                className="cursor-pointer text-red-500 hover:underline"
                            >
                                Logout
                            </span>
                        </div>
                    )}
                </div>

            </div>


            <hr />

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-3 md:!px-12 lg:!px-20 mt-2">

                {/* LOGO */}
                <img
                    src={logo}
                    alt="Logo"
                    className="h-7 !mx-auto md:!mx-0"
                />

                {/* SEARCH */}
                <div className="relative w-full md:w-[45%] lg:w-[30%]">
                    <FiSearch
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800"
                        size={14}
                    />

                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-24 py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-200"
                    />

                    <button
                        onClick={handleSearch}
                        className="absolute right-0 top-0 h-full border bg-green-500 text-white px-4 !rounded-r-md hover:bg-green-700"
                    >
                        Search
                    </button>
                </div>

                {/* ICONS */}
                <div className="flex items-center justify-center md:justify-end gap-3">
                    <div
                        onClick={() => navigate("/wishlist")}
                        className="relative cursor-pointer"
                    >
                        <IoIosHeartEmpty className="text-xl" />

                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {wishlistCount}
                            </span>
                        )}
                    </div>

                    <span className="h-5 w-px bg-gray-400"></span>

                    <div
                    onClick={handleCartClick}
                     className="relative cursor-pointer">
                        <HiOutlineShoppingBag className="text-xl" />

                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold w-4 h-4 !rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    {/* PRICE + TEXT */}
                    <div className="hidden sm:flex flex-col leading-tight">
                        <span className="font-semibold text-green-600 text-sm">
                            ${cartTotal.toFixed(2)}
                        </span>
                        <span className="text-[11px] text-gray-500">
                            Shopping cart
                        </span>
                    </div>
                </div>

            </div>

        </div>
    )
}; export default Topbar;