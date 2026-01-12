import React, { useState } from 'react';
import './ContactUs.css'; // Ensure CSS is correctly linked
import contactBanner from '../assets/contactimages/contactbanner.png'; // Correct path to the image
import contactmap   from '../assets/contactimages/contactmap.png'; // Correct path to the image

const Contact = () => {
  // State for form fields and validation errors
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    message: '',
    accept: false,
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    

    // If no validation errors, submit form
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="contact-us-container">
      {/* Banner Section */}
      <div className="banner" style={{ backgroundImage: `url(${contactBanner})` }}>
      </div>

      {/* Contact Form Section with Flexbox Layout */}
      <div className="contact-form-and-details">
        {/* Left Side: Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="Front Name"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'input-error' : ''}
              />
              {errors.firstName && <div className="error">{errors.firstName}</div>}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'input-error' : ''}
              />
              {errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'input-error' : ''}
            />
            {errors.address && <div className="error">{errors.address}</div>}

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && <div className="error">{errors.message}</div>}

            <div className="form-row">
              <label>
                <input
                  type="checkbox"
                  name="accept"
                  checked={formData.accept}
                  onChange={handleChange}
                />
                Accept.
              </label>
              {errors.accept && <div className="error">{errors.accept}</div>}
            </div>

            <div className="form-row">
              <button type="submit">Enter</button>
            </div>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div className="contact-details">
          <p>Telephone <br />+123 456 7890</p>
          <p>e-mail <br />abc@gmail.com</p>
          <button className="whatsapp-btn mt-2">Contact through WhatsApp</button>
        </div>
      </div>


      {/* Image and Quote Section */}
      <div className="image-quote-container">
        {/* Image Section */}
        <div className="image-container">
          <img
            src={contactmap}  // Use imported image here
            alt="Location Map"
            width="100%" 
            height="auto"
          />
        </div>

        {/* Quote Section */}
        <div className="quote-container">
          <p className="quote-text">
            “If the path be beautiful, let us not ask where it leads.” 
            <br />
            - Anatole France
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
