import React, { useState } from 'react';
import axios from '../api/axiosConfig'; // Reusable Axios instance
import '../components/DonateForm.css';

const DonateForm = ({ type, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationData = {
      name,
      phone,
      address,
      quantity,
      description,
      type, // "Food" or "Clothes"
    };

    try {
      const endpoint =
        type.toLowerCase() === 'food'
          ? '/care-nest/donate/food'
          : '/care-nest/donate/clothes';

      const response = await axios.post(endpoint, donationData);
      console.log('Donation submitted:', response.data);
      alert(`Donation request for ${type} submitted!`);
      onClose();
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Donate {type}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Quantity of Items"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <textarea
            placeholder="Additional Donation Details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Submit Donation</button>
          <button type="button" onClick={onClose} className="close-btn">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;

