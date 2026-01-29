import { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Menubar from "./Menubar";
import Blog from "./Blog";
import Footer from "./Footer";

function Checkout() {
    const [cart, setCart] = useState([]);
    const [payment, setPayment] = useState("cod");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        state: "",
        zip: "",
        email: "",
        phone: "",
        notes: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const subtotal = cart.reduce(
        (sum, item) =>
            sum + parseFloat(item.price.replace("$", "")) * item.qty,
        0
    );

    // 🔹 Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🔹 Validation
    const validate = () => {
        let newErrors = {};

        if (!form.firstName.trim()) newErrors.firstName = "First name is required";
        if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!form.address.trim()) newErrors.address = "Address is required";
        if (!form.country) newErrors.country = "Country is required";
        if (!form.state) newErrors.state = "State is required";
        if (!form.zip.trim()) newErrors.zip = "Zip code is required";

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 🔹 Submit
    const placeOrder = () => {
        if (!validate()) return;

        alert("Order placed successfully 🎉");

        localStorage.removeItem("cart");
        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
        <div>
            <Topbar />
            <Menubar />
            <div className="px-3 md:!px-12 lg:!px-20 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT */}
                    <div className="lg:col-span-8">
                        <h2 className="text-xl font-semibold mb-4">Billing Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <input name="firstName" onChange={handleChange} className="input" placeholder="First name" />
                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                            </div>

                            <div>
                                <input name="lastName" onChange={handleChange} className="input" placeholder="Last name" />
                                {errors.lastName && <p className="error">{errors.lastName}</p>}
                            </div>

                            <input className="input" placeholder="Company name (optional)" />
                        </div>

                        <div className="mt-4">
                            <input name="address" onChange={handleChange} className="input w-full" placeholder="Street Address" />
                            {errors.address && <p className="error">{errors.address}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div>
                                <select name="country" onChange={handleChange} className="input">
                                    <option value="">Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                </select>
                                {errors.country && <p className="error">{errors.country}</p>}
                            </div>

                            <div>
                                <select name="state" onChange={handleChange} className="input">
                                    <option value="">State</option>
                                    <option>Tamil Nadu</option>
                                    <option>California</option>
                                </select>
                                {errors.state && <p className="error">{errors.state}</p>}
                            </div>

                            <div>
                                <input name="zip" onChange={handleChange} className="input" placeholder="Zip Code" />
                                {errors.zip && <p className="error">{errors.zip}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <input name="email" onChange={handleChange} className="input" placeholder="Email address" />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div>
                                <input name="phone" onChange={handleChange} className="input" placeholder="Phone number" />
                                {errors.phone && <p className="error">{errors.phone}</p>}
                            </div>
                        </div>

                        <hr />

                        <h3 className="text-lg font-semibold !mt-6 mb-2">Additional Info</h3>
                        <textarea
                            name="notes"
                            onChange={handleChange}
                            className="input w-full h-28"
                            placeholder="Notes about your order"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-4">
                        <div className="border rounded-md p-5">
                            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between text-sm mb-2 items-center">
                                    <span className="flex gap-2 items-center">
                                        <img src={item.image} alt="" className="w-14 h-14 object-cover rounded" />
                                        {item.title} × {item.qty}</span>
                                    <span className="">${(parseFloat(item.price.replace("$", "")) * item.qty).toFixed(2)}</span>
                                </div>
                            ))}

                            <hr className="my-3" />

                            <div className="flex justify-between text-sm">
                                <span>Total:</span>
                                <span className="font-semibold">${subtotal.toFixed(2)}</span>
                            </div>

                            <h3 className="text-sm font-semibold mt-4 mb-2">Payment Method</h3>
                            
                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={payment === "cod"}
                                        onChange={() => setPayment("cod")}
                                    />
                                    Cash on Delivery
                                </label>

                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={payment === "paypal"}
                                        onChange={() => setPayment("paypal")}
                                    />
                                    PayPal
                                </label>
                            </div>

                            <button
                                onClick={placeOrder}
                                className="w-full mt-5 bg-green-500 hover:bg-green-600 text-white py-2 rounded-full font-semibold"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Blog />
            <Footer />
        </div>
    );
}

export default Checkout;