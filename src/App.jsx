import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";  // Import Signin page
import Signup from "./pages/Signup";  // Import Signup page
import Home from "./pages/Home";
import Collections from "./pages/Collections";  
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";  
import Cart from "./pages/Cart";  
import Payment from "./pages/Payment";
import Orderconfirmaion from "./pages/Orderconfirmation";

import Footer from "./components/Footer"; // Import Footer

function SimplePage({ title }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontFamily: "Graduate" }}>{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Signin />} />  {/* Set Signin as the first page */}
        
        <Route path="/signin" element={<Signin />} />  {/* Set Signin as the first page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orderconfirmation" element={<Orderconfirmaion />} />
      </Routes>

      <Footer />
    </>
  );
}
