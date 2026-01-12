import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderConfirmation.css';

import contactbanner from "../assets/contactimages/contactbanner.png"; // Adjust the path as needed

const OrderConfirmation = () => {
  const navigate = useNavigate();

  // Navigate to Collections page
  const handleContinueShopping = () => {
    navigate("/collections"); // Adjust the route to the actual Collections page path
  };

  const handleViewOrderDetails = () => {
    // Implement navigation to Order Details if needed
    alert("View Order Details functionality is not yet implemented.");
  };

  return (
    <div className="order-confirmation-container">
      {/* Banner Section */}
      <div className="banner-contact" style={{ backgroundImage: `url(${contactbanner})` }}></div>

      <div className="order-confirmation-content">
        <div className="order-confirmed">
          <div className="confirmation-icon">
            <i className="bi bi-check-circle-fill"></i> {/* Check icon */}
          </div>
          <h2>Order Confirmed!</h2>
          <p>Thank you for your purchase. Your order has been received & is being processed.</p>
        </div>

        <div className="order-summary">
          <div className="order-item">
            <p><strong>Order Number</strong> #845985</p>
            <p><strong>Estimated Delivery</strong> Friday, December 12</p>
          </div>

          <div className="shipping-info">
            <h4>Shipping Updates</h4>
            <p>We'll send shipping updates to your email address.</p>

            <h4>Email Confirmation</h4>
            <p>A confirmation email has been sent with your order details.</p>
          </div>

          <div className="next-steps">
            <h4>What's Next?</h4>
            <ul>
              <li>Your order is being prepared for shipment</li>
              <li>You’ll receive a tracking number via email</li>
              <li>Your fragrances will arrive at your doorstep</li>
            </ul>
          </div>

          <div className="order-actions">
            <button className="btn-continue" onClick={handleContinueShopping}>Continue Shopping</button>
            <button className="btn-view-order" onClick={handleViewOrderDetails}>View Order Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;