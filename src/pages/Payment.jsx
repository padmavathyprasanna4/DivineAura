import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment.css';

// Importing the banner image
import contactbanner from "../assets/contactimages/contactbanner.png"; // Adjust the path as needed

const Payment = () => {
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const price = 550;
  const shipping = 150;
  const tax = 0;
  const total = price + shipping + tax;

  // Set up the useNavigate hook
  const navigate = useNavigate();

  // Handle the "Proceed to Checkout" action
  const handleProceedToCheckout = () => {
    // Navigate to the order confirmation page
    navigate("/orderconfirmation");
  };

  // Handle the "Continue Shopping" action (this can be customized to navigate back to collections or another page)
  const handleContinueShopping = () => {
    navigate("/collections"); // Assuming this route takes the user to the collections page
  };

  return (
    <div className="payment-container">
      {/* Banner Section */}
      <div className="banner-contact" style={{ backgroundImage: `url(${contactbanner})` }}></div>

      <div className="payment-content">
        <div className="payment-left">
          <h2>Payment</h2>

          <div className="form-group">
            <h5>Contact Information</h5>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <h5>Shipping Address</h5>
            <input
              type="text"
              placeholder="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="form-control"
            />
            <div className="d-flex justify-content-between">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="form-control"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <h5>Payment Details</h5>
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              className="form-control"
            />
            <div className="d-flex justify-content-between">
              <input
                type="text"
                placeholder="Expiry Date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="form-control"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="payment-right">
          <h3>Order Summary</h3>
          <div className="order-summary">
            <div className="summary-item">
              <p>Subtotal</p>
              <p>Rs {price}</p>
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
          <div className="payment-actions">
            <button className="btn-primary" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
            <button className="btn-secondary" onClick={handleContinueShopping}>Continue Shopping</button>
          </div>
        </div>
      </div>

      <div className="pay-now">
        <button className="btn btn-pay-now">Pay Rs {total}</button>
      </div>
    </div>
  );
};

export default Payment;
