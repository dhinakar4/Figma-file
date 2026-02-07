import img1 from '../public/news/img1.png';
import img2 from '../public/news/img2.png';
import img3 from '../public/news/img3.png';
import { GoTag } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";


function Latestnews() {
    const categories = [
        { id: 1, image: img1, content: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum." },
        { id: 2, image: img2, content: "Eget lobortis lorem lacinia. Vivamus pharetra semper," },
        { id: 3, image: img3, content: "Maecenas blandit risus elementum mauris malesuada." },

    ];

    return (
        <div className="px-3 md:!px-12 lg:!px-20 mt-5">

            {/* HEADER */}
            <div className="mb-4 !items-center !justify-center !text-center">
                <h3 className="text-lg sm:text-xl font-bold ">
                    Latest News
                </h3>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-4">
                {categories.map((item) => (
                    <div
                        key={item.id}
                        className="border border-gray-200 relative pb-3
                             group rounded-md">


                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-contain rounded-md" />

                        <div className="p-3 items-start">

                            <div className="gap-2 items-start flex gap-4">
                                <span className="flex text-xs md:text-sm text-gray-600">
                                    <GoTag className='mt-1 me-1 text-gray-400' />  Food
                                </span>
                                <span className="flex text-gray-600 text-xs md:text-sm">
                                    <IoPersonOutline className='mt-1 me-1 text-gray-400' /> By Admin
                                </span>

                                <span className="flex text-gray-600 text-xs md:text-sm">
                                    <FaRegCommentAlt className='mt-1 me-1 text-gray-400' /> 65 comments
                                </span>
                            </div>
                            <div className='font-semibold group-hover:!text-green-700 mt-1 text-lg leading-snug'>
                                {item.content}
                            </div>
                        </div>
                        <span className="text-green-500 hover:text-green-600 text-sm font-medium cursor-pointer hover:underline pl-3">
                            Read More →
                        </span>

                    </div>

                ))}
            </div>

        </div>
    );
}

export default Latestnews;

