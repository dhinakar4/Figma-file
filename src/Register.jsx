import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
        setError("");
    };

    const handleRegister = () => {
        // 🔐 Validation
        if (!form.email || !form.password || !form.confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!form.terms) {
            setError("You must accept the terms & conditions");
            return;
        }

        // 🟢 Fake register (API later)
        localStorage.setItem("token", "dummy-token");

        // 📦 Preserve cart redirect logic
        const { product, qty, redirectTo } = location.state || {};

        if (product) {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existing = cart.find((item) => item.id === product.id);

            if (existing) {
                existing.qty += qty || 1;
            } else {
                cart.push({ ...product, qty: qty || 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            window.dispatchEvent(new Event("cartUpdated"));
        }

        navigate(redirectTo || "/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white border p-6 rounded-md w-[320px] shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Create Account
                </h2>

                {error && (
                    <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
                )}

                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="border w-full mb-3 p-2 rounded"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border w-full mb-3 p-2 rounded"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border w-full mb-3 p-2 rounded"
                    onChange={handleChange}
                />

                {/* TERMS */}
                <label className="flex text-start items-center gap-2 text-sm text-gray-600 mb-4">
                    <input
                        type="checkbox"
                        name="terms"
                        checked={form.terms}
                        onChange={handleChange}
                        className="my-1 me-1"
                    />
                     Accept all{" "}
                    <span className="text-gray-600 cursor-pointer hover:underline">
                        Terms & Conditions
                    </span>
                </label>

                <button
                    onClick={handleRegister}
                    className="bg-green-500 hover:bg-green-600 text-white w-full py-2 !rounded-full font-semibold"
                >
                    Register
                </button>

                {/* LOGIN LINK */}
                <div className="mt-4 text-center text-sm text-gray-600">
                    Already have account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-gray-800 font-semibold cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Register;
