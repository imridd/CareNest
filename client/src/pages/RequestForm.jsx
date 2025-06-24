import React, { useState } from 'react';
import axios from '../api/axiosConfig'; // Axios instance
import '../components/RequestForm.css';

const RequestForm = ({ type, onClose }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name,
      address,
      phone,
      location,
      date,
      time,
      message,
      type, // either "Food" or "Clothes"
    };

    try {
      const endpoint =
        type.toLowerCase() === 'food'
          ? '/care-nest/receive/food'
          : '/care-nest/receive/clothes';

      const response = await axios.post(endpoint, requestData);
      console.log('Request submitted:', response.data);
      alert(`Your request for ${type} has been submitted!`);
      onClose();
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Something went wrong while submitting your request.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Request {type}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Needed Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <label>Needed Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label>Needed Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <textarea
            placeholder="Additional Details (Optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Send Receive Request</button>
          <button type="button" onClick={onClose} className="close-btn">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;



