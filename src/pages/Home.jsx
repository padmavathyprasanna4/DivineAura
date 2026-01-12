import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Home.css";

// HERO + TRENDING + PURITY
import perfume1 from "../assets/homeimages/perfume1.png";
import perfume2 from "../assets/homeimages/perfume2.png";
import perfume3 from "../assets/homeimages/perfume3.png";
import perfume4 from "../assets/homeimages/perfume4.png";
import perfume5 from "../assets/homeimages/perfume5.png";
import perfume6 from "../assets/homeimages/perfume6.png";
import perfume7 from "../assets/homeimages/perfume7.png";

// WHY CHOOSE US images
import perfume8 from "../assets/homeimages/perfume8.png";
import perfume9 from "../assets/homeimages/perfume9.png";
import perfume10 from "../assets/homeimages/perfume10.png";
import perfume11 from "../assets/homeimages/perfume11.png";

// Importing the icon images
import perfume12 from "../assets/homeimages/perfume12.png";
import perfume13 from "../assets/homeimages/perfume13.png";
import perfume14 from "../assets/homeimages/perfume14.png";
import perfume15 from "../assets/homeimages/perfume15.png";

// Importing images
import perfume16 from "../assets/homeimages/perfume16.png";
import perfume17 from "../assets/homeimages/perfume17.png";

export default function Home() {
  const navigate = useNavigate(); // Add this line for navigation

  const products = useMemo(
    () => [
      { id: 2, img: perfume2, brand: "CHANEL PARIS", price: 750, discount: 41 },
      { id: 3, img: perfume3, brand: "CHANEL PARIS", price: 750, discount: 41 },
      { id: 4, img: perfume4, brand: "CHANEL PARIS", price: 750, discount: 41 },
      { id: 5, img: perfume5, brand: "CHANEL PARIS", price: 750, discount: 41 },
      { id: 6, img: perfume6, brand: "CHANEL PARIS", price: 750, discount: 41 },
    ],
    []
  );

  // slider indicator (optional)
  const [page, setPage] = useState(5);
  const totalPages = 12;
  const prev = () => setPage((p) => (p <= 1 ? 1 : p - 1));
  const next = () => setPage((p) => (p >= totalPages ? totalPages : p + 1));

  // Navigate to collection page
  const handleShopNowClick = () => {
    navigate("/collections");
  };

  const handleOurCollectionsClick = () => {
    navigate("/collections");
  };

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-kicker">Enhance your natural radiance</p>

          <h1 className="hero-title">
            THE ART OF SCENT,<br />
            THE ESSENCE OF SPRING
          </h1>

          <p className="hero-desc">
            Discover the best perfume collections ,Find your <br />
            signature scent today
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-ghost"
              onClick={handleOurCollectionsClick} // Add the onClick handler here
            >
              Our Collections
            </button>
            <button
              className="btn btn-primary"
              onClick={handleShopNowClick} // Add the onClick handler here
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img className="hero-image" src={perfume1} alt="Perfume hero" />
        </div>
      </section>

      {/* TRENDING */}
      <section className="trending">
        <h2 className="section-title">Trending Products</h2>

        <div className="trending-card">
          <div className="cards">
            {products.slice(0, 5).map((p) => (
              <article className="card" key={p.id}>
                <div className="badge">-{p.discount}%</div>

                <div className="card-img">
                  <img src={p.img} alt={p.brand} />
                </div>

                <div className="card-meta">
                  <div className="card-brand">{p.brand}</div>

                  <div className="card-bottom">
                    <div className="price">
                      <i className="bi bi-heart-fill heart" />
                      <span>Rs {p.price}</span>
                    </div>

                    <div className="buy-wrap">
                      <i className="bi bi-cart3 cart" />
                      <button className="buy-btn">Buy Now</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PURITY SECTION */}
      <section className="purity-page">
        <div className="purity-section">
          <div className="purity-left">
            <img className="purity-img" src={perfume7} alt="Perfume bottle" />
          </div>

          <div className="purity-right">
            <h2 className="purity-title font-graduate">A COMMITMENT TO PURITY</h2>

            <p className="purity-text">
              We believe in sustainable luxury.Every <br />
              product we display here is crafted with <br />
              responsibly sourced ingredients,ensuring a lasting <br />
              lasting impact on you - not on the environment
            </p>

            <button className="purity-btn">Learn More</button>
          </div>
        </div>

        <div className="purity-stats">
          <div className="stat">
            <div className="stat-num">140+</div>
            <div className="stat-label">Products Available</div>
          </div>

          <div className="divider" />

          <div className="stat">
            <div className="stat-num">1M +</div>
            <div className="stat-label">Sales Already</div>
          </div>

          <div className="divider" />

          <div className="stat">
            <div className="stat-num">2M +</div>
            <div className="stat-label">Trusted Customers</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-page">
        <div className="why">
          {/* HEADER */}
          <div className="why-header">
            <h2 className="why-title font-graduate">WHY CHOOSE US</h2>
            <p className="why-sub">
              LUXURY REDEFINED - CRAFTED FOR THE EXCEPTIONAL
            </p>
          </div>

          {/* MAIN LAYOUT */}
          <div className="why-layout">
            {/* LEFT IMAGE GRID (FIXED WIDTH) */}
            <div className="why-images">
              <div className="img-card img-large">
                <img src={perfume8} alt="Perfume 1" />
              </div>

              <div className="img-card">
                <img src={perfume9} alt="Perfume 2" />
              </div>

              <div className="img-card">
                <img src={perfume10} alt="Perfume 3" />
              </div>

              <div className="img-card">
                <img src={perfume11} alt="Perfume 4" />
              </div>
            </div>

            {/* RIGHT FEATURES (STRICT 2x2 GRID) */}
            <div className="why-features">
              <div className="feature">
                <div className="feature-num font-graduate">01</div>
                <h3 className="feature-title">Artistic Design</h3>
                <p className="feature-text">
                  Every fragrance is a masterpiece, crafted with precision by world-class perfumes
                </p>
              </div>

              <div className="feature">
                <div className="feature-num font-graduate">02</div>
                <h3 className="feature-title">Organic Ingredients</h3>
                <p className="feature-text">
                  Sourced from nature’s finest elements, each note embodies pure sophistication
                </p>
              </div>

              <div className="feature">
                <div className="feature-num font-graduate">03</div>
                <h3 className="feature-title">Sustainable Elegance</h3>
                <p className="feature-text">
                  Indulge guilt-free with fragrances designed to honour the planet
                </p>
              </div>

              <div className="feature">
                <div className="feature-num font-graduate">04</div>
                <h3 className="feature-title">Exclusive Collections</h3>
                <p className="feature-text">
                  Discover scents as rare and unique as the moments they inspire to make special
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <div className="features-section">
        <div className="feature">
          <img src={perfume12} alt="Free Delivery" className="feature-icon" />
          <div className="feature-text">
            <h3>Free Delivery</h3>
            <p>No Cost Shipping Worldwide</p>
          </div>
        </div>
        <div className="feature">
          <img src={perfume13} alt="Satisfaction Guarantee" className="feature-icon" />
          <div className="feature-text">
            <h3>Satisfaction Guarantee</h3>
            <p>Guaranteed money-back policy</p>
          </div>
        </div>
        <div className="feature">
          <img src={perfume14} alt="24/7 Assistance" className="feature-icon" />
          <div className="feature-text">
            <h3>24/7 Assistance</h3>
            <p>Always-on customer support</p>
          </div>
        </div>
        <div className="feature">
          <img src={perfume15} alt="Flexible Payments" className="feature-icon" />
          <div className="feature-text">
            <h3>Flexible Payments</h3>
            <p>Secure and easy payment options</p>
          </div>
        </div>
      </div>

      {/* AWAKEN SECTION */}
      <div className="awaken-section">
        <div className="left-image">
          <img src={perfume16} alt="Person with perfume" className="section-image" />
        </div>
        <div className="section-text">
          <h2>AWAKEN YOUR INNER <br />BEAUTY</h2>
          <p>
            Timeless Fragrances, Crafted with passion, <br />Embody Individuality, Elegance
            And Sophistication,<br /> Leaving A Lasting Impression Always.
          </p>
        </div>
        <div className="right-image">
          <img src={perfume17} alt="Person applying perfume" className="section-image" />
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="testimonial-box">
          <div className="testimonial-rating">
            <span className="star">⭐</span>
            <span className="star">⭐</span>
            <span className="star">⭐</span>
            <span className="star">⭐</span>
            <span className="star">⭐</span>
          </div>
          <p className="testimonial-text">
            This is the best place to buy perfumes and colognes online. We offer a wide selection of fragrances from top brands, including Chanel, Dior, Gucci, and more.
          </p>
          <div className="testimonial-author">
            <img src={perfume16} alt="Person applying perfume" />
            <div>
              <h4 className="author-name">Sophia</h4>
              <p className="author-job">Costume Designer</p>
            </div>
          </div>
          <div className="testimonial-nav">
            <button className="nav-button">←</button>
            <button className="nav-button">→</button>
          </div>
        </div>
      </section>
    </div>
  );
}
