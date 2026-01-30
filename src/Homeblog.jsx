import img1 from '../public/blog/img1.png';
import img2 from '../public/blog/img2.png';
import img3 from '../public/blog/img3.png';
import img4 from '../public/blog/img4.png';

function Homeblog() {
    return (
        <div className="mt-5 px-3 md:!px-12 lg:!px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow py-4 px-2 md:px-4">

                {/* ITEM */}
                <div className="flex items-start gap-3 
                        justify-center sm:justify-start 
                        text-center sm:text-left 
                        mx-auto sm:mx-0">
                    <img src={img1} alt="" className="h-11 w-11 object-contain" />
                    <div>
                        <h6 className="font-semibold text-sm">Free Shipping</h6>
                        <p className="text-xs text-gray-600">
                            Free shipping on all order
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3 
                        justify-center sm:justify-start 
                        text-center sm:text-left 
                        mx-auto sm:mx-0">
                    <img src={img2} alt="" className="h-11 w-11 object-contain" />
                    <div>
                        <h6 className="font-semibold text-sm">Customer Support 24/7</h6>
                        <p className="text-xs text-gray-600">
                            Instant access to support
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3 
                        justify-center sm:justify-start 
                        text-center sm:text-left 
                        mx-auto sm:mx-0">
                    <img src={img3} alt="" className="h-11 w-11 object-contain" />
                    <div>
                        <h6 className="font-semibold text-sm">100% Secure Payment</h6>
                        <p className="text-xs text-gray-600">
                            We ensure your money is safe
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3 
                        justify-center sm:justify-start 
                        text-center sm:text-left 
                        mx-auto sm:mx-0">
                    <img src={img4} alt="" className="h-11 w-11 object-contain" />
                    <div>
                        <h6 className="font-semibold text-sm">Money-Back Guarantee</h6>
                        <p className="text-xs text-gray-600">
                            30 Days Money-Back Guarantee
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Homeblog;
