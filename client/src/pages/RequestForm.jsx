import React, { useState } from 'react';
import '../components/RequestForm.css'; // Import improved CSS

const RequestForm = ({ type, onClose }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your request for ${type} has been submitted!`);
    onClose();
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
          <button onClick={onClose} className="close-btn">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;


