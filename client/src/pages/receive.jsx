import React, { useState } from 'react';
import foodImg from '../assets/request-food.jpg';
import clothesImg from '../assets/request-clothes.jpg';
import Footer from './Footer';
import '../App.css';
import RequestForm from './RequestForm'; // Import the request form

const Receive = () => {
  const [requestType, setRequestType] = useState(null);

  const openForm = (type) => {
    setRequestType(type);
  };

  const closeForm = () => {
    setRequestType(null);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Receive Essentials</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <div style={{ width: '90%', maxWidth: '400px', padding: '1rem', borderRadius: '12px', backgroundColor: '#fff8f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
          <img src={foodImg} alt="Receive Food" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
          <h2>Need Food?</h2>
          <p>Get help with a nutritious meal delivered to your location.</p>
          <button 
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }} 
            onClick={() => openForm('Food')}
          >
            Receive Food
          </button>
        </div>

        <div style={{ width: '90%', maxWidth: '400px', padding: '1rem', borderRadius: '12px', backgroundColor: '#fff8f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
          <img src={clothesImg} alt="Receive Clothes" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
          <h2>Need Clothes?</h2>
          <p>Request comfortable clothing to stay warm and confident.</p>
          <button 
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }} 
            onClick={() => openForm('Clothes')}
          >
            Receive Clothes
          </button>
        </div>
      </div>

      {requestType && <RequestForm type={requestType} onClose={closeForm} />}
      <Footer />
    </div>
  );
};

export default Receive;






