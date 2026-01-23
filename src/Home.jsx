import logo from '../public/logo.png';
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import Menubar from './Menubar';
import Homeblog from './Homeblog';
import Categories from './Categories';
import Products from './Products';
import Offers from './Offers';
import Hotdeals from './Hotdeals';
import Summeroffer from './Summeroffer';
import Featuredproducts from './Featuredproducts';
import Latestnews from './Latestnews';
import Clients from './Clients';
import Socialmedial from './Shocialmedias';
import Blog from './Blog';
import Footer from './Footer';

import img1 from '../public/home/img3.png';
import img2 from '../public/home/img2.png';
import img3 from '../public/home/img1.png';



function Home() {

    const [search, setSearch] = useState("");

    const handleSearch = () => {
        alert(`Searching for: ${search}`);
    };
    const [openLang, setOpenLang] = useState(false);
    const [openCurr, setOpenCurr] = useState(false);
    return (
        <div className='overflow-hidden'>

            <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:!items-center sm:justify-between px-3 md:!px-12 pt-3">

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
                    <span className="cursor-pointer">
                        Sign In / Sign Up
                    </span>
                </div>

            </div>


            <hr />

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-5 mt-2">

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
                <div className="flex items-center justify-center md:justify-end gap-2">
                    <IoIosHeartEmpty className="text-xl cursor-pointer" />

                    <span className="h-5 w-px bg-gray-400"></span>

                    <HiOutlineShoppingBag className="text-xl cursor-pointer" />

                    <span className="text-xs hidden sm:block">
                        Shopping cart
                    </span>
                </div>

            </div>


            <Menubar />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-3 md:!px-12 mt-3">

                <div className="md:col-span-2">
                    <img
                        src={img1}
                        alt="Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="grid grid-rows-2 gap-3">
                    <img
                        src={img2}
                        alt="Image 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <img
                        src={img3}
                        alt="Image 3"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

            </div>

            <Homeblog />
            <Categories />
            <Products />
            <Offers />
            <Hotdeals />
            <Summeroffer />
            <Featuredproducts />
            <Latestnews />
            <Clients />
            <Socialmedial />
            <Blog />
            <Footer />

        </div>
    )
}; export default Home;