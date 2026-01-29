import { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Menubar from "./Menubar";
import Topbar from "./Topbar";
import Blog from "./Blog";
import Footer from "./Footer";

function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    // Load cart (latest first – already OK)
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart([...storedCart].reverse());
    }, []);

    const syncCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const increaseQty = (id) => {
        syncCart(
            cart.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        syncCart(
            cart.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        syncCart(cart.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce(
        (sum, item) =>
            sum + parseFloat(item.price.replace("$", "")) * item.qty,
        0
    );

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold mb-3">Your cart is empty</h2>
                <button
                    onClick={() => navigate("/")}
                    className="bg-green-600 text-white px-6 py-2 rounded-full"
                >
                    Return to shop
                </button>
            </div>
        );
    }

    return (
        <div>
            <Topbar />
            <Menubar />
            <div className="px-4 md:!px-12 lg:!px-20 py-10">

                <h2 className="text-2xl font-semibold text-center mb-4">
                    My Shopping Cart
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* LEFT TABLE */}
                    <div className="lg:col-span-2 overflow-hidden">

                        <div className="border rounded-lg">

                            {/* HEADER */}
                            <div className="hidden md:grid grid-cols-12 text-xs text-gray-500 font-semibold px-4 py-3 border-b">
                                <div className="col-span-5">PRODUCT</div>
                                <div className="col-span-2 text-center">PRICE</div>
                                <div className="col-span-3 text-center">QUANTITY</div>
                                <div className="col-span-2 text-right">SUBTOTAL</div>
                            </div>

                            {/* ROWS */}
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 border-b items-center"
                                >
                                    {/* PRODUCT */}
                                    <div className="md:col-span-5 flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 object-contain"
                                        />
                                        <span className="font-medium">{item.title}</span>
                                    </div>

                                    {/* PRICE */}
                                    <div className="md:col-span-2 text-center text-gray-600">
                                        {item.price}
                                    </div>

                                    {/* QTY */}
                                    <div className="md:col-span-3 flex justify-center">
                                        <div className="flex items-center border !rounded-full px-2 py-1">
                                            <button
                                                onClick={() => decreaseQty(item.id)}
                                                className="w-8 h-8 bg-gray-200 !rounded-full"
                                            >
                                                −
                                            </button>
                                            <span className="px-3">{item.qty}</span>
                                            <button
                                                onClick={() => increaseQty(item.id)}
                                                className="w-8 h-8 bg-gray-200 !rounded-full"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* SUBTOTAL + REMOVE */}
                                    <div className="md:col-span-2 flex justify-end items-center gap-3">
                                        <span className="font-semibold">
                                            $
                                            {(
                                                parseFloat(item.price.replace("$", "")) * item.qty
                                            ).toFixed(2)}
                                        </span>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-gray-400 hover:text-red-500 "
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* ACTION BUTTONS */}
                            <div className="flex justify-between p-4">
                                <button
                                    onClick={() => navigate("/")}
                                    className="bg-gray-100 px-6 py-2 !rounded-full text-sm"
                                >
                                    Return to shop
                                </button>
                                <button className="bg-gray-100 px-6 py-2 !rounded-full text-sm">
                                    Update Cart
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 border rounded-lg p-4 flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="Enter coupon code"
                                className="flex-1 border !rounded-full px-4 py-2"
                            />
                            <button className="bg-gray-800 text-white px-6 py-2 !rounded-full">
                                Apply Coupon
                            </button>
                        </div>
                    </div>

                    {/* RIGHT TOTAL */}
                    <div className="border rounded-lg p-6 h-fit">
                        <h3 className="font-semibold mb-4">Cart Total</h3>

                        <div className="flex justify-between text-sm mb-2">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-sm mb-2">
                            <span>Shipping:</span>
                            <span className="text-green-600">Free</span>
                        </div>

                        <hr className="my-3" />

                        <div className="flex justify-between font-semibold mb-5">
                            <span>Total:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={() => navigate("/checkout")}
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 !rounded-full"
                        >
                            Proceed to checkout
                        </button>
                    </div>
                </div>

            </div>
            <Blog />
            <Footer />
        </div>
    );
}

export default Cart;