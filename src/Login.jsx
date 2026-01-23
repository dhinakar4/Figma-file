import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    // fake login
    localStorage.setItem("token", "dummy-token");

    // go back to previous page
    navigate(location.state?.from || "/");
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
