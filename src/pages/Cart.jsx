import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

// Importing the product image and banner
import cart2 from "../assets/cartimages/cart2.png"; // Adjust the path as needed
import contactbanner from "../assets/contactimages/contactbanner.png"; // Adjust the path as needed

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 550;
  const shipping = 150;
  const tax = 0; // No tax in this example
  const total = price * quantity + shipping + tax;

  // Navigation hook to navigate between pages
  const navigate = useNavigate();

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Navigate to Payment page
  const handleProceedToPayment = () => {
    navigate("/payment"); // Replace with the actual route to the Payment page
  };

  return (
    <div className="cart-container">
      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: `url(${contactbanner})` }}></div>

      <div className="cart-content">
        <div className="cart-left">
          <h2>Shopping Cart</h2>
          <div className="cart-item">
            <div className="cart-item-left">
              <img src={cart2} alt="Channel Perfume" className="cart-item-img" />
            </div>
            <div className="cart-item-right">
              <h5>Channel</h5>
              <p>50ml</p>
              <div className="quantity">
                <button onClick={handleDecrease} className="btn">-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease} className="btn">+</button>
              </div>
              <p>Rs {price * quantity}</p>
            </div>
          </div>
        </div>

        <div className="cart-right">
          <h3>Order Summary</h3>
          <div className="order-summary">
            <div className="summary-item">
              <p>Subtotal</p>
              <p>Rs {price * quantity}</p>
            </div>
            <div className="summary-item">
              <p>Shipping</p>
              <p>Rs {shipping}</p>
            </div>
            <div className="summary-item">
              <p>Tax</p>
              <p>Rs {tax}</p>
            </div>
            <div className="summary-item total">
              <p>Total</p>
              <p>Rs {total}</p>
            </div>
          </div>
          <div className="cart-actions">
            <button className="btn-primary" onClick={handleProceedToPayment}>Proceed to Checkout</button>
            <button className="btn-secondary">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
