import './App.css';
import Cart from './components/Cart';
import Fotter from './components/Fotter';
import HeroImage from './components/HeroImage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import OrderPage from './components/OrderPage';
import ProductDetails from './components/ProductDetails';
import ProductShow from './components/ProductShow';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './page/MainPage.jsx';
import Dashboard from './components/Dashboard';
import Dash from './components/Dash';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <HeroImage /> */}
      {/* <HomePage /> */}
      {/* <Fotter /> */}
      {/* <Cart /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <ProductShow /> */}
      {/* <ProductDetails /> */}
      {/* <OrderPage /> */}
      {/* <Profile /> */}
      {/* <Fotter /> */}
      {/* <Dashboard /> */}

      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/" element={<Dash />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<ProductShow />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
