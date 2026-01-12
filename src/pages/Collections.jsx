import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Collections.css";

// Example product images (replace these with your actual images)
import collectionbanner from "../assets/collectionsimages/collectionbanner.png";
import collection2 from "../assets/collectionsimages/collection2.png";
import collection3 from "../assets/collectionsimages/collection3.png";
import collection4 from "../assets/collectionsimages/collection4.png";
import collection5 from "../assets/collectionsimages/collection5.png";
import collection6 from "../assets/collectionsimages/collection6.png";
import collection7 from "../assets/collectionsimages/collection7.png";
import collection8 from "../assets/collectionsimages/collection8.png";
import collection9 from "../assets/collectionsimages/collection9.png";

import dior1 from "../assets/collectionsimages/dior1.png";
import dior2 from "../assets/collectionsimages/dior2.png";
import dior3 from "../assets/collectionsimages/dior3.png";
import dior4 from "../assets/collectionsimages/dior4.png";
import dior5 from "../assets/collectionsimages/dior5.png";
import dior6 from "../assets/collectionsimages/dior6.png";
import dior7 from "../assets/collectionsimages/dior7.png";
import dior8 from "../assets/collectionsimages/dior8.png";

import dg1 from "../assets/collectionsimages/dg1.png";
import dg2 from "../assets/collectionsimages/dg2.png";
import dg3 from "../assets/collectionsimages/dg3.png";
import dg4 from "../assets/collectionsimages/dg4.png";
import dg5 from "../assets/collectionsimages/dg5.png";
import dg6 from "../assets/collectionsimages/dg6.png";
import dg7 from "../assets/collectionsimages/dg7.png";
import dg8 from "../assets/collectionsimages/dg8.png";

import gucci1 from "../assets/collectionsimages/gucci1.png";
import gucci2 from "../assets/collectionsimages/gucci2.png";
import gucci3 from "../assets/collectionsimages/gucci3.png";
import gucci4 from "../assets/collectionsimages/gucci4.png";
import gucci5 from "../assets/collectionsimages/gucci5.png";
import gucci6 from "../assets/collectionsimages/gucci6.png";
import gucci7 from "../assets/collectionsimages/gucci7.png";
import gucci8 from "../assets/collectionsimages/gucci8.png";

const Collections = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleInputChange = (e) => setEmail(e.target.value);

  const handleSubscribe = () => {
    alert(`Subscribed with email: ${email}`);
  };

  const handleBuyNow = () => {
    // Navigate to the Cart page when "Buy Now" is clicked
    navigate("/cart");
  };

  const chanelProducts = [
    { id: 1, name: 'Chanel Paris', image: collection2, price: '750', discount: '41%' },
    { id: 2, name: 'Chanel Paris', image: collection3, price: '650', discount: '41%' },
    { id: 3, name: 'Chanel Paris', image: collection4, price: '950', discount: '41%' },
    { id: 4, name: 'Chanel Paris', image: collection5, price: '1150', discount: '41%' },
    { id: 5, name: 'Chanel Paris', image: collection6, price: '550', discount: '41%' },
    { id: 6, name: 'Chanel Paris', image: collection7, price: '750', discount: '41%' },
    { id: 7, name: 'Chanel Paris', image: collection8, price: '550', discount: '41%' },
    { id: 8, name: 'Chanel Paris', image: collection9, price: '550', discount: '41%' },
  ];

  // The same logic applies to Dior, D&G, and Gucci products.
  const diorProducts = [
    { id: 1, name: 'Miss Dior', image: dior1, price: '950', discount: '41%' },
    { id: 2, name: 'Dior J’adore', image: dior2, price: '450', discount: '41%' },
    { id: 3, name: 'Dior Homme', image: dior3, price: '750', discount: '41%' },
    { id: 4, name: 'Dior Savage', image: dior4, price: '950', discount: '41%' },
    { id: 5, name: 'Miss Dior', image: dior5, price: '550', discount: '41%' },
    { id: 6, name: 'Dior Burning', image: dior6, price: '250', discount: '41%' },
    { id: 7, name: 'Dior Addict', image: dior7, price: '950', discount: '41%' },
    { id: 8, name: 'Dior Savage', image: dior8, price: '650', discount: '41%' },
  ];

  const dgProducts = [
    { id: 1, name: 'D&G', image: dg1, price: '550', discount: '41%' },
    { id: 2, name: 'D&G', image: dg2, price: '950', discount: '41%' },
    { id: 3, name: 'D&G Intenso', image: dg3, price: '650', discount: '41%' },
    { id: 4, name: 'D&G Light', image: dg4, price: '550', discount: '41%' },
    { id: 5, name: 'D&G King', image: dg5, price: '950', discount: '41%' },
    { id: 6, name: 'D&G', image: dg6, price: '650', discount: '41%' },
    { id: 7, name: 'D&G Night', image: dg7, price: '550', discount: '41%' },
    { id: 8, name: 'D&G Light', image: dg8, price: '950', discount: '41%' },
  ];

  const gucciProducts = [
    { id: 1, name: 'Gucci', image: gucci1, price: '750', discount: '41%' },
    { id: 2, name: 'Gucci', image: gucci2, price: '650', discount: '41%' },
    { id: 3, name: 'Gucci', image: gucci3, price: '950', discount: '41%' },
    { id: 4, name: 'Gucci', image: gucci4, price: '1150', discount: '41%' },
    { id: 5, name: 'Gucci', image: gucci5, price: '550', discount: '41%' },
    { id: 6, name: 'Gucci', image: gucci6, price: '750', discount: '41%' },
    { id: 7, name: 'Gucci', image: gucci7, price: '550', discount: '41%' },
    { id: 8, name: 'Gucci', image: gucci8, price: '550', discount: '41%' },
  ];

  return (
    <div className="collections-container">
      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: `url(${collectionbanner})` }}></div>

      {/* Title */}
      <div className="text-center my-4">
        <h2>Our Exclusive Collections</h2>
      </div>

      {/* Chanel Products */}
      <h3 className="text-start fw-bold ms-4">Chanel Paris</h3>
      <div className="row">
        {chanelProducts.map((product) => (
          <div className="col-md-3 col-sm-6" key={product.id}>
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-price">Rs {product.price}</p>
                <div className="heart-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <button className="btn-danger" onClick={handleBuyNow}>
                  <i className="bi bi-cart-plus"></i> Buy Now
                </button>
                <span className="discount">-{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-view">View more collections</button>

      {/* Dior Products */}
      <h3 className="text-start fw-bold ms-4">Dior</h3>
      <div className="row">
        {diorProducts.map((product) => (
          <div className="col-md-3 col-sm-6" key={product.id}>
            <div className="card">
              <div className="heart-icon">
                <i className="bi bi-heart-fill"></i>
              </div>
              <img src={product.image} alt={product.name} className="card-img" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-price">Rs {product.price}</p>
                <button className="btn-danger" onClick={handleBuyNow}>
                  <i className="bi bi-cart-plus"></i> Buy Now
                </button>
                <span className="discount">-{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-view">View more collections</button>

      {/* Subscription Section */}
      <div className="subscription-container">
        <div className="subscription-content">
          <h3>Stay Connected With Divine Aura</h3>
          <p>Receive exclusive offers, first looks at new fragrances, and invitations to special events</p>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your email"
              value={email}
              onChange={handleInputChange}
            />
            <button className="btn btn-subscribe" onClick={handleSubscribe}>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
