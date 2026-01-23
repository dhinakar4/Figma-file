import Topbar from './Topbar';
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

    
    return (
        <div className='overflow-hidden'>
            
            <Topbar />

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