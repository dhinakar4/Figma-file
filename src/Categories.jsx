import img1 from '../public/categories/img1.png';
import img2 from '../public/categories/img2.png';
import img3 from '../public/categories/img3.png';
import img4 from '../public/categories/img4.png';
import img5 from '../public/categories/img5.png';
import img6 from '../public/categories/img6.png';
import img7 from '../public/categories/img7.png';
import img8 from '../public/categories/img8.png';
import img9 from '../public/categories/img9.png';
import img10 from '../public/categories/img10.png';
import img11 from '../public/categories/img11.png';
import img12 from '../public/categories/img12.png';
import { useNavigate } from 'react-router-dom';

function Categories() {

    const navigate = useNavigate();

    const handleCategoryClick = (title) => {
        const slug = title
            .toLowerCase()
            .replace(/ & /g, "-")
            .replace(/\s+/g, "-");

        navigate(`/category/${slug}`);
    };


    const categories = [
        { id: 1, title: "Fresh Fruits", image: img1 },
        { id: 2, title: "Fresh Vegetables", image: img2 },
        { id: 3, title: "Meat & Fish", image: img3 },
        { id: 4, title: "Snacks", image: img4 },
        { id: 5, title: "Beverages", image: img5 },
        { id: 6, title: "Beauty & Health", image: img6 },
        { id: 7, title: "Bread & Bakery", image: img7 },
        { id: 8, title: "Baking Needs", image: img8 },
        { id: 9, title: "Cooking", image: img9 },
        { id: 10, title: "Diabetic Food", image: img10 },
        { id: 11, title: "Dish Detergents", image: img11 },
        { id: 12, title: "Oil", image: img12 },
    ];

    return (
        <div className='px-3 md:!px-12 lg:!px-20 mt-5'>
            <div className='flex items-center justify-between'>
                <h3 className="text-xl font-semibold mb-4">
                    Popular Categories
                </h3>
                <span className='text-green-500 text-sm font-medium mb-4'>
                    View All →
                </span>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
                {categories.map((item) => (
                    <div key={item.id} onClick={() => handleCategoryClick(item.title)}
                    className="text-center border border-gray-200 rounded-md
                            hover:!border-green-600
                            hover:ring-1 hover:ring-green-600/40
                            hover:shadow-[0_0_15px_rgba(34,197,94,0.35)]
                            transition-all duration-300 cursor-pointer">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-30 md:h-32 object-contain rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
