import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

function Blog() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
        setError("");
        alert(`Subscribed with ${email}`);
        setEmail("");
    };

    return (
        <div className="">
            <div className="bg-gray-100 py-8 px-4 md:!px-16 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Text */}
                <div className="text-center md:!text-left">
                    <h2 className="text-2xl font-bold mb-1">Subscribe to our Newsletter</h2>
                    <p className="text-gray-400">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>

                {/* Email Input */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-start md:items-center gap-2 w-full md:w-auto"
                >
                    <div className="flex flex-col w-full md:w-auto">
                        {/* Input + Button */}
                        <div className="flex w-full md:w-auto !rounded-full border border-gray-300 focus-within:ring-2 focus-within:ring-green-400">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-4 py-2 !text-xs !rounded-l-full w-full focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-2 md:!px-3 lg:!px-3 py-2 bg-green-500 text-white !rounded-r-full hover:bg-green-600 transition"
                            >
                                Subscribe
                            </button>
                        </div>

                        {/* Validation Error */}
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                </form>


                {/* Social Icons */}
                <div className="flex gap-3 mt-4 md:!mt-0">
                    {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map((Icon, idx) => (
                        <div
                            key={idx}
                            className="p-2 rounded-full bg-gray-200 hover:bg-green-500 text-gray-700 hover:text-white cursor-pointer transition"
                        >
                            <Icon size={20} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
