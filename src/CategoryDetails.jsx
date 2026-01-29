import { useParams } from "react-router-dom";
import Topbar from "./Topbar";
import Menubar from "./Menubar";
import bg from "../public/img5.png";
import { CgHome } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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
import brand from '../public/brand.png';
import detail2 from '../public/detailimage/img2.png';
import detail3 from '../public/detailimage/img3.png';
import detail4 from '../public/detailimage/img4.png';

import Blog from "./Blog";
import Footer from "./Footer";

import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";



function CategoryDetails() {

    const { slug } = useParams();

    const [selectedProduct, setSelectedProduct] = useState(null);

    const isAuthenticated = () => {
        return localStorage.getItem("token");
    };

    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login", {
                state: {
                    redirectTo: "/cart",
                    product,
                    qty,
                },
            });
            return;
        }

        // Logged in → add directly
        addProductToCart(product, qty);
        navigate("/cart");
    };

    const addProductToCart = (product, qty) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find((item) => item.id === product.id);

        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({ ...product, qty });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // ⭐ THIS LINE IS THE KEY
        window.dispatchEvent(new Event("cartUpdated"));
    };


    // WISHLIST LOGIC
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(stored);
    }, []);

    const isWishlisted = (id) => {
        return wishlist.some((item) => item.id === id);
    };

    const toggleWishlist = (product, e) => {
        if (e) e.stopPropagation(); // prevent card click

        let updatedWishlist;

        if (isWishlisted(product.id)) {
            updatedWishlist = wishlist.filter((item) => item.id !== product.id);
        } else {
            updatedWishlist = [...wishlist, product];
        }

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

        window.dispatchEvent(new Event("wishlistUpdated")); // optional
    };

    const categories = [
        { id: 1, title: "Green Apple", image: img1, price: "$12.00", oldprice: "$24.00", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: true, category: "fruits" },
        { id: 2, title: "Chinese cabbage", image: img2, price: "$12.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: false, category: "vegetables" },
        { id: 3, title: "Green Lettuce", image: img3, price: "$9.00", oldprice: "$18.00", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true, inStock: true, category: "vegetables" },
        { id: 4, title: "Eggplant", image: img4, price: "$34.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: true, category: "vegetables" },
        { id: 5, title: "Fresh Cauliflower", image: img5, price: "$12.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: true, category: "vegetables" },
        { id: 6, title: "Green Capsicum", image: img6, price: "$9.00", oldprice: "$20.99", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: true, category: "vegetables" },
        { id: 7, title: "Green Chilli", image: img7, price: "$34.00", oldprice: "$74.00", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true, inStock: true, category: "vegetables" },
        { id: 8, title: "Big Potatoes", image: img8, price: "$12.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: false, category: "vegetables" },
        { id: 9, title: "Corn", image: img9, price: "$12.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: true, category: "fruits" },
        { id: 10, title: "Red Capsium", image: img10, price: "$12.00", oldprice: "$24.00", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true, inStock: true, category: "vegetables" },
        { id: 11, title: "Red Tomatoes", image: img11, price: "$9.00", oldprice: "$20.99", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true, inStock: true, category: "vegetables" },
        { id: 12, title: "Surjapur Mango", image: img12, price: "$34.00", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: true, category: "fruits" },
        { id: 13, title: "Green Cucumber", image: img13, price: "$15.99", oldprice: "$30.00", rating: 4, offerEnd: "2026-01-30T18:30:00", sale: true, inStock: true, category: "vegetables" },
        { id: 14, title: "Ladies Finger", image: img14, price: "$14.99", oldprice: "", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: false, category: "vegetables" },
        { id: 15, title: "Red Chilli", image: img15, price: "$14.99", oldprice: "$28.00", rating: 4, offerEnd: "2026-01-30T18:30:00", inStock: true, category: "vegetables" },
    ];

    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty((prev) => prev + 1);
    };

    const decreaseQty = () => {
        setQty((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedPrice, setSelectedPrice] = useState("all");
    const [selectedRating, setSelectedRating] = useState("all");
    const [sortBy, setSortBy] = useState("latest");
    const [showCount, setShowCount] = useState(16);

    const detailImages = selectedProduct
        ? [
            selectedProduct.image,
            detail2,
            detail3,
            detail4,
        ]
        : [];

    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        if (selectedProduct?.image) {
            setActiveImage(selectedProduct.image);
            setThumbIndex(0);
        }
    }, [selectedProduct]);

    const [thumbIndex, setThumbIndex] = useState(0);

    const handleUp = () => {
        setThumbIndex((prev) => {
            const next = Math.max(prev - 1, 0);
            setActiveImage(detailImages[next]);
            return next;
        });
    };

    const handleDown = () => {
        setThumbIndex((prev) => {
            const next = Math.min(prev + 1, detailImages.length - 1);
            setActiveImage(detailImages[next]);
            return next;
        });
    };

    const filteredProducts = categories
        .filter((item) => {
            // CATEGORY FILTER
            if (
                selectedCategory !== "all" &&
                item.category !== selectedCategory
            ) {
                return false;
            }

            // PRICE FILTER
            const price = parseFloat(item.price.replace("$", ""));
            if (selectedPrice === "low" && price >= 10) return false;
            if (selectedPrice === "mid" && (price < 10 || price > 20)) return false;
            if (selectedPrice === "high" && price <= 20) return false;

            // RATING FILTER
            if (selectedRating !== "all" && item.rating < selectedRating) return false;

            return true;
        })
        .sort((a, b) => {
            const priceA = parseFloat(a.price.replace("$", ""));
            const priceB = parseFloat(b.price.replace("$", ""));

            if (sortBy === "priceLow") return priceA - priceB;
            if (sortBy === "priceHigh") return priceB - priceA;

            return b.id - a.id; // latest
        })
        .slice(0, showCount);




    const targetDate = new Date("2026-02-01T23:59:59"); // change your offer end date/time

    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        mins: "00",
        secs: "00",
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance <= 0) {
                setTimeLeft({ days: "00", hours: "00", mins: "00", secs: "00" });
                clearInterval(timer);
                return;
            }

            const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
            const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
            const mins = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
            const secs = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");

            setTimeLeft({ days, hours, mins, secs });
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const categoryName = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

    useEffect(() => {
        if (!slug) return;

        const normalized = slug.toLowerCase();

        if (normalized === "vegetables" || normalized === "fruits") {
            setSelectedCategory(normalized);
        } else {
            setSelectedCategory("all"); // fallback
        }
    }, [slug]);




    return (
        <div className="overflow-hidden">
            <Topbar />
            <Menubar />

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 mt-2 px-3 md:!px-20">
                <CgHome />
                <span>Categories</span>
                <span>›</span>
                <span className="text-green-600 font-medium">
                    {categoryName}
                </span>
            </div>

            <div className="px-3 md:!px-12 lg:!px-20 mt-5">
                <div className="relative rounded-xl overflow-hidden">

                    <div className="grid grid-cols-12 min-h-[220px] md:min-h-[320px]">

                        {/* LEFT TEXT PANEL */}
                        <div className="col-span-12 md:col-span-5 bg-black flex items-center px-6 md:px-10 py-8 md:py-0">
                            <div className="text-white">
                                <p className="text-xs uppercase tracking-widest mb-2">
                                    Best Deals
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold mb-3">
                                    Sale of the Month
                                </h2>

                                <div className="flex gap-4">
                                    {[
                                        { label: "Days", value: timeLeft.days },
                                        { label: "Hours", value: timeLeft.hours },
                                        { label: "Mins", value: timeLeft.mins },
                                        { label: "Secs", value: timeLeft.secs },
                                    ].map((item, i) => (
                                        <div key={i} className="text-center">
                                            <span className="block text-green-400 text-xl font-bold">
                                                {item.value}
                                            </span>
                                            <p className="text-[10px] text-gray-300 uppercase">
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>


                                <button className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-2 !rounded-full font-semibold">
                                    Shop Now →
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGE PANEL */}
                        <div className="col-span-12 md:col-span-7 bg-black">
                            <img
                                src={bg}
                                alt="Summer Offer"
                                className="w-full h-[220px] md:h-full object-cover object-center md:!object-center lg:!object-center xl:!object-right"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* FILTER BAR */}
            <div className="mt-6 px-3 md:!px-12 lg:!px-20">

                <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

                    {/* LEFT FILTERS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full lg:w-auto">

                        {/* CATEGORY */}
                        <div className="relative w-full">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full appearance-none border rounded-md
                     px-4 py-2 pr-10 text-sm bg-white
                     focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                                <option value="all">Category</option>
                                <option value="vegetables">Vegetables</option>
                                <option value="fruits">Fruits</option>
                            </select>
                            <MdKeyboardArrowDown
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                size={20}
                            />
                        </div>

                        {/* PRICE */}
                        <div className="relative w-full">
                            <select
                                value={selectedPrice}
                                onChange={(e) => setSelectedPrice(e.target.value)}
                                className="w-full appearance-none border rounded-md
                     px-4 py-2 pr-10 text-sm bg-white
                     focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                                <option value="all">Price</option>
                                <option value="low">Under $10</option>
                                <option value="mid">$10 - $20</option>
                                <option value="high">Above $20</option>
                            </select>
                            <MdKeyboardArrowDown
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                size={20}
                            />
                        </div>

                        {/* RATING */}
                        <div className="relative w-full">
                            <select
                                value={selectedRating}
                                onChange={(e) => setSelectedRating(e.target.value)}
                                className="w-full appearance-none border rounded-md
                     px-4 py-2 pr-10 text-sm bg-white
                     focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                                <option value="all">Rating</option>
                                <option value="5">5 Star</option>
                                <option value="4">4 Star & Up</option>
                                <option value="3">3 Star & Up</option>
                            </select>
                            <MdKeyboardArrowDown
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                size={20}
                            />
                        </div>
                    </div>

                    {/* RIGHT FILTERS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto">

                        {/* SORT */}
                        <div className="relative w-full lg:w-[180px]">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full appearance-none border rounded-md
                     px-4 py-2 pr-10 text-sm bg-white
                     focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                                <option value="latest">Sort by: Latest</option>
                                <option value="priceLow">Price: Low to High</option>
                                <option value="priceHigh">Price: High to Low</option>
                            </select>
                            <MdKeyboardArrowDown
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                size={20}
                            />
                        </div>

                        {/* SHOW */}
                        <div className="relative w-full lg:w-[150px]">
                            <select
                                value={showCount}
                                onChange={(e) => setShowCount(Number(e.target.value))}
                                className="w-full appearance-none border rounded-md
                     px-4 py-2 pr-10 text-sm bg-white
                     focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                                <option value={8}>Show: 8</option>
                                <option value={16}>Show: 16</option>
                                <option value={24}>Show: 24</option>
                            </select>
                            <MdKeyboardArrowDown
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                size={20}
                            />
                        </div>

                    </div>

                </div>
            </div>



            {/* PRODUCTS LIST */}
            <div className="px-3 md:!px-12 lg:!px-20 mt-10 mb-5">

                <div className="flex justify-end mb-5">
                    <span className="text-sm text-gray-500">
                        {filteredProducts.length} items
                    </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {filteredProducts.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedProduct(item)}
                            className="p-2 sm:p-3 border border-gray-200 relative rounded-md
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

                            {/* OUT OF STOCK BADGE */}
                            {item.inStock === false && (
                                <span className="absolute top-3 left-3 bg-gray-800 text-white text-[10px] px-2 py-1 rounded-sm z-10">
                                    OUT OF STOCK
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


                {selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2 sm:px-4">

                        {/* MODAL */}
                        <div
                            className=" bg-white relative w-full sm:w-[90%] md:w-[900px] max-h-[90vh]
                            overflow-y-auto p-4 sm:p-6 rounded-md"    >
                            {/* CLOSE */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute right-3 top-3 sm:right-4 sm:top-5 text-xl text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                                {/* IMAGE */}
                                <div className="flex gap-6 items-center">

                                    {/* LEFT THUMBNAILS + ARROWS */}
                                    <div className="hidden sm:flex flex-col items-center gap-3">

                                        {/* UP ARROW */}
                                        <button
                                            onClick={handleUp}
                                            className="text-gray-400 hover:text-black">
                                            ▲
                                        </button>

                                        {/* THUMB LIST */}
                                        <div className="flex flex-col gap-3">
                                            {detailImages.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        setActiveImage(img);
                                                        setThumbIndex(idx);
                                                    }}
                                                    className={`w-16 h-16 border rounded-md p-1 flex items-center justify-center
                                                        ${activeImage === img
                                                            ? "!border-green-500"
                                                            : "!border-gray-200 !hover:border-green-400"
                                                        }`}
                                                >
                                                    <img
                                                        src={img}
                                                        alt=""
                                                        className="w-full h-full object-contain"
                                                    />
                                                </button>
                                            ))}
                                        </div>

                                        {/* DOWN ARROW */}
                                        <button
                                            onClick={handleDown}
                                            className="text-gray-400 hover:text-black">
                                            ▼
                                        </button>
                                    </div>

                                    {/* MAIN IMAGE */}
                                    <div className="flex-1 flex items-center justify-center">
                                        {activeImage && (
                                            <img
                                                src={activeImage}
                                                alt={selectedProduct?.title || "product"}
                                                className="w-full max-h-[420px] object-contain"
                                            />
                                        )}
                                    </div>

                                </div>

                                {/* CONTENT */}
                                <div>

                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <span className="text-xl sm:text-2xl font-semibold">
                                            {selectedProduct.title}
                                        </span>
                                        {selectedProduct.inStock && (
                                            <span className="bg-green-200 text-green-800 text-[8px] rounded-sm px-2 py-1">
                                                IN STOCK
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center text-sm text-gray-500 mb-2 gap-1">
                                        <Stars rating={selectedProduct.rating} />
                                        <span className="text-[10px]">
                                            {selectedProduct.rating} Review
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        {selectedProduct.oldprice && (
                                            <span className="text-gray-400 line-through">
                                                {selectedProduct.oldprice}
                                            </span>
                                        )}
                                        <span className="text-green-600 text-2xl font-bold">
                                            {selectedProduct.price}
                                        </span>
                                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                            64% OFF
                                        </span>
                                    </div>

                                    <hr className="my-2" />

                                    {/* BRAND + SHARE */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-xs mb-3">
                                        <span className="flex items-center gap-2 font-semibold">
                                            Brand: <img src={brand} alt="" className="h-8" />
                                        </span>

                                        <span className="flex items-center gap-2 font-semibold">
                                            Share item:
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
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-4">
                                        Fresh organic vegetables directly from farms.
                                        High quality and healthy food for your family.
                                    </p>

                                    {/* QTY + CART */}
                                    <div className="flex flex-wrap items-center gap-3 mb-4">

                                        <div className="flex items-center border !rounded-full px-2 h-11">
                                            <button
                                                onClick={decreaseQty}
                                                disabled={qty === 1}
                                                className="!rounded-full w-7 h-7 bg-gray-300 flex items-center justify-center font-medium"
                                            >
                                                -
                                            </button>
                                            <span className="mx-3">{qty}</span>
                                            <button
                                                onClick={increaseQty}
                                                className="!rounded-full w-7 h-7 bg-gray-300 flex items-center justify-center font-medium"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddToCart(selectedProduct);
                                            }}
                                            className="flex items-center justify-center gap-2
                                            px-6 sm:px-8 md:px-10 h-11 bg-green-500 hover:bg-green-600
                                            text-white text-sm sm:text-base !rounded-full font-semibold transition" >
                                            Add to Cart <HiOutlineShoppingBag size={14} />
                                        </button>

                                        <button
                                            onClick={(e) => toggleWishlist(selectedProduct, e)}
                                            className={`w-11 h-11 !rounded-full transition flex items-center justify-center
                                             ${isWishlisted(selectedProduct.id)
                                                    ? "bg-green-600 text-white"
                                                    : "bg-green-100 text-green-800 hover:bg-green-600 hover:text-white"
                                                }`}
                                        >
                                            {isWishlisted(selectedProduct.id) ? (
                                                <FaHeart size={18} />
                                            ) : (
                                                <CiHeart size={20} />
                                            )}
                                        </button>

                                    </div>

                                    <hr className="my-2" />

                                    <p className="text-sm">
                                        <b>Category:</b> {selectedProduct.category}
                                    </p>
                                    <p className="text-sm">
                                        <b>Tag:</b> {selectedProduct.category} Healthy{" "}
                                        <u>{selectedProduct.title}</u>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                )}


            </div>

            <Blog />
            <Footer />

        </div>
    );
}

export default CategoryDetails;



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