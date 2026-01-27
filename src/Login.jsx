import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    // 1️⃣ Fake login (replace with API later)
    localStorage.setItem("token", "dummy-token");

    // 2️⃣ Read data passed from Add to Cart
    const { product, qty, redirectTo } = location.state || {};

    // 3️⃣ If product exists → add to cart
    if (product) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find((item) => item.id === product.id);

      if (existing) {
        existing.qty += qty || 1;
      } else {
        cart.push({ ...product, qty: qty || 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // 4️⃣ Redirect
    navigate(redirectTo || "/");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border p-6 rounded-md w-[300px]">
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border w-full mb-3 p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full mb-3 p-2 rounded"
        />

        <button
          onClick={handleLogin}
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;