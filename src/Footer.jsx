import React from "react";
import footer from '../public/footer.png'

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 px-4 sm:!px-8 md:!px-12 xl:!px-12 py-4">
            <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-4">
                {/* Column 1 */}
                <div className="lg:col-span-2 flex flex-col">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        style={{ width: "112px", filter: "invert(100%) brightness(200%)" }}
                    />

                    <p className="mt-3 pe-3 md:!pe-8 lg:!pe-16 xl:!pe-22">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>

                    <div className="flex flex-wrap gap-4 mt-3">
                        <span className="text-white border-b-2 border-green-500">
                            +1 234 567 890
                        </span>
                        <span className="text-white border-b-2 border-green-500">
                            info@example.com
                        </span>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-start">
                    <h3 className="text-white font-semibold mb-3">My Account</h3>
                    <p className="hover:text-white cursor-pointer">Profile</p>
                    <p className="hover:text-white cursor-pointer">Orders</p>
                    <p className="hover:text-white cursor-pointer">Wishlist</p>
                    <p className="hover:text-white cursor-pointer">Settings</p>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-start">
                    <h3 className="text-white font-semibold mb-3">Help</h3>
                    <p className="hover:text-white cursor-pointer">Support</p>
                    <p className="hover:text-white cursor-pointer">FAQs</p>
                    <p className="hover:text-white cursor-pointer">Shipping</p>
                    <p className="hover:text-white cursor-pointer">Returns</p>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col items-start">
                    <h3 className="text-white font-semibold mb-3">Proxy</h3>
                    <p className="hover:text-white cursor-pointer">Blog</p>
                    <p className="hover:text-white cursor-pointer">Affiliate</p>
                    <p className="hover:text-white cursor-pointer">Partners</p>
                    <p className="hover:text-white cursor-pointer">Developers</p>
                </div>

                {/* Column 5 */}
                <div className="flex flex-col items-start">
                    <h3 className="text-white font-semibold mb-3">Categories</h3>
                    <p className="hover:text-white cursor-pointer">Electronics</p>
                    <p className="hover:text-white cursor-pointer">Fashion</p>
                    <p className="hover:text-white cursor-pointer">Home</p>
                    <p className="hover:text-white cursor-pointer">Books</p>
                </div>
            </div>

            <hr />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-500 text-sm text-center md:text-left">
                    Ecobazar eCommerce © 2021 All rights reserved.
                </div>

                <div className="flex justify-center">
                    <img
                        src={footer}
                        alt="Payment methods"
                        className="h-8 object-contain"
                    />
                </div>
            </div>

        </footer>

    );
}

export default Footer;
