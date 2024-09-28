import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: ''
    });

    window.location.href = '/';
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contact Me</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ width: '50%' }}>
          
          <div style={{ marginBottom: '20px' }}>
            <p><b>Email:</b> manzar242@gmail.com</p>
            <p><b>Phone:</b> +1 437 995 2848</p>
            <p><b>Address:</b> 10 Meadowglen Pl, Scarborough - ON, Canada</p>

            
              <a href="https://www.linkedin.com/in/manzar-shikhaliyeva-5a2168330/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
          </div>
          
          <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '10px' }}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <div>
              <button style={{ backgroundColor: '#444', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
    