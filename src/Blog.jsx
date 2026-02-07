import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

function Blog() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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
    <div className="bg-gray-100 py-8 px-3 md:!px-12 lg:!px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* TEXT */}
        <div className="text-center md:!text-left max-w-xl">
          <h2 className="!text-lg sm:!text-xl md:!text-2xl font-bold mb-1">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-400 !text-xs md:!text-sm !leading-relaxed">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-auto"
        >
          <div className="flex flex-col w-full">

            {/* INPUT + BUTTON */}
            <div className="flex w-full max-w-md mx-auto md:mx-0 !rounded-full border border-gray-300 bg-white
                            overflow-hidden focus-within:ring-2 focus-within:ring-green-400">

              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 sm:!px-4 py-2 !text-xs sm:!text-sm 
                           focus:!outline-none"
              />

              <button
                type="submit"
                disabled={!email}
                className={`px-3 sm:!px-4 py-2 bg-green-600 !rounded-full !text-xs sm:!text-sm text-white
                  whitespace-nowrap transition
                  ${email
                    ? " hover:bg-green-600"
                    : "cursor-not-allowed"
                  }`}
              >
                Subscribe
              </button>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-red-500 text-xs sm:text-sm mt-1 text-center md:text-left">
                {error}
              </p>
            )}
          </div>
        </form>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3 justify-center md:justify-start">
          {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map((Icon, idx) => (
            <div
              key={idx}
              className="p-2 rounded-full bg-gray-200 text-gray-700
                         hover:bg-green-500 hover:text-white
                         cursor-pointer transition"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Blog;
