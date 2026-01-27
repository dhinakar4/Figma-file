import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import CategoryDetails from './CategoryDetails';
import Login from './Login';
import Cart from './Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<CategoryDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
