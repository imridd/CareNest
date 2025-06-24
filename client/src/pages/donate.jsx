import React, { useState } from 'react';
import '../components/Donate.css';
import foodImg from '../assets/donate-food.jpg';
import clothesImg from '../assets/donate-clothes.jpg';
import '../App.css';
import DonateForm from './DonateForm'; // Import the donation form

const Donate = () => {
  const [donationType, setDonationType] = useState(null);

  const openForm = (type) => {
    setDonationType(type);
  };

  const closeForm = () => {
    setDonationType(null);
  };

  return (
    <div className="donate-section">
      <h1>Donate Items</h1>
      
      {/* Container for donation options */}
      <div className="donate-card-container">
        <div className="donate-card">
          <img src={foodImg} alt="Donate Food" className="donate-img" />
          <h2>Donate Food</h2>
          <p>Share meals with those who need them the most.</p>
          <button className="donate-btn" onClick={() => openForm('Food')}>
            Donate Food
          </button>
        </div>

        <div className="donate-card">
          <img src={clothesImg} alt="Donate Clothes" className="donate-img" />
          <h2>Donate Clothes</h2>
          <p>Give warm clothes to help someone stay comfortable.</p>
          <button className="donate-btn" onClick={() => openForm('Clothes')}>
            Donate Clothes
          </button>
        </div>
      </div>

      {/* Render the donation form dynamically */}
      {donationType && <DonateForm type={donationType} onClose={closeForm} />}
    </div>
  );
};

export default Donate;



