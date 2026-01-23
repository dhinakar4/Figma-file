import React from 'react';
import img1 from '../public/icons/icon1.png';
import img2 from '../public/icons/icon2.png';
import img3 from '../public/icons/icon3.png';
import img4 from '../public/icons/icon4.png';
import img5 from '../public/icons/icon5.png';
import img6 from '../public/icons/icon6.png';

import add1 from '../public/instagram/img1.png';
import add2 from '../public/instagram/img2.png';
import add3 from '../public/instagram/img3.png';
import add4 from '../public/instagram/img4.png';
import add5 from '../public/instagram/img5.png';
import add6 from '../public/instagram/img6.png';
import { FaInstagram } from "react-icons/fa";



function Socialmedias() {
    const icons = [img1, img2, img3, img4, img5, img6];

    const images = [add1,add2,,add3,add4,add5,add6 ];

    // Split icons into rows for mobile (3 icons per row)
    const mobileRows = [];
    for (let i = 0; i < icons.length; i += 3) {
        mobileRows.push(icons.slice(i, i + 3));
    }

    return (
        <div>
            <div className="px-3 md:!px-12 mt-5">
                {/* Desktop view */}
                <div className="hidden md:flex items-center justify-between">
                    {icons.map((icon, index) => (
                        <React.Fragment key={index}>
                            <img
                                src={icon}
                                alt={`Icon ${index + 1}`}
                                className="h-20 w-20 object-contain"
                            />
                            {/* Vertical line only on desktop */}
                            {index !== icons.length - 1 && (
                                <div className="hidden md:block w-px h-7 bg-gray-200 mx-4"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile view */}
                <div className="flex flex-wrap md:hidden gap-4 justify-center">
                    {mobileRows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex w-full justify-center gap-4 items-center"
                        >
                            {row.map((icon, index) => (
                                <img
                                    key={index}
                                    src={icon}
                                    alt={`Icon ${index + 1}`}
                                    className="h-20 w-20 object-contain"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-4 md:!px-12 py-4">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6 py-3">
                    Follow us on Instagram
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-xl"
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay (only on 2nd image like your design) */}
                            {index === 1 && (
                                <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center">
                                    <FaInstagram className="text-white text-4xl" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}

export default Socialmedias;
