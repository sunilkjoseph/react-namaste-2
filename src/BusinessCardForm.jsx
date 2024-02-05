import { useState } from 'react';
import './BusinessCard.css';

function BusinessCardForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    officeAddress: '',
    phoneNumber: '',
    email: '',
  });

  const [showBusinessCard, setShowBusinessCard] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, submit:false
    });
  };

  const handleShowBusinessCard = () => {
    // Check if any field has been filled before showing the business card
    if (Object.values(formData).some((value) => value !== '')) {
      setShowBusinessCard(true);
    }
  };

  return (
    <>
    <div className="container">
      <h2>Business Card Form</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Designation:
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Office Address:
          <input
            type="text"
            name="officeAddress"
            value={formData.officeAddress}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </form>

      <button onClick={handleShowBusinessCard}>Show Business Card</button>
    </div>
      {showBusinessCard && (
        <div className="container">
          <p className='name'>{formData.name}</p>
          <p className='designation'>{formData.designation}</p>
          <p className='address'>{formData.officeAddress}</p>
          <p className='phone'>Mobile:{formData.phoneNumber}</p>
          <p className='email'>Email: {formData.email}</p>
        </div>
      )}
    
    </>
  );
}

export default BusinessCardForm;
