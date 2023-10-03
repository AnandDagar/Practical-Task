import React, { useState } from "react";
import './MyAcccss.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Handle form submission here
    }
  };

  return (
    <>
<div>
  <h1 className="ht">Contact</h1>
  <p className="ht1">Home>>content</p>
  <p className="con"></p>
  </div>

   
      <div className="koko">
        <div className="contact-us-page">
          <h1 className="title">Get in touch</h1>
         
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {formErrors.firstName && (
                <span className="error">{formErrors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {formErrors.lastName && (
                <span className="error">{formErrors.lastName}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <span className="error">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <span className="error">{formErrors.phone}</span>
              )}
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {formErrors.message && (
                <span className="error">{formErrors.message}</span>
              )}
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>



        
<div>
  <p className='ri'>Copyright © 2023 Tijarah All Rights Reserved.</p>
</div>


      </div>
    </>
  );
};

export default Contact;
