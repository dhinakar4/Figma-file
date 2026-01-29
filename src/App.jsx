import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import CategoryDetails from './CategoryDetails';
import Login from './Login';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Checkout from './Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<CategoryDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
