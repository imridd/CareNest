import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import '../components/UserStatus.css';

const UserStatus = () => {
  const [phone, setPhone] = useState('');
  const [donations, setDonations] = useState([]);
  const [receives, setReceives] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleCheckStatus = async () => {
    try {
      const donationRes = await axios.get(`/care-nest/user/donations?phone=${phone}`);
      const receiveRes = await axios.get(`/care-nest/user/receives?phone=${phone}`);

      setDonations(donationRes.data);
      setReceives(receiveRes.data);
      setShowResults(true);
    } catch (err) {
      alert('No records found or server error.');
      setShowResults(false);
    }
  };

  return (
    <div className="user-status-container">
      <h2>Check Your Request Status</h2>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleCheckStatus}>Check Status</button>

      {showResults && (
        <div className="status-results">
          <h3>Donation Requests</h3>
          {donations.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((d) => (
                  <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.type}</td>
                    <td>{d.quantity}</td>
                    <td>{d.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No donation requests found.</p>
          )}

          <h3>Receive Requests</h3>
          {receives.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {receives.map((r) => (
                  <tr key={r.id}>
                    <td>{r.name}</td>
                    <td>{r.type}</td>
                    <td>{r.quantity}</td>
                    <td>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No receive requests found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserStatus;

