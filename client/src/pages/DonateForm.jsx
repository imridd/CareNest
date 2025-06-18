import React, { useState } from 'react';
import '../components/DonateForm.css'; // Improved styling

const DonateForm = ({ type, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Donation request for ${type} submitted!`);
    onClose();
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
          <button onClick={onClose} className="close-btn">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
