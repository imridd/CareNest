import React, { useEffect, useState } from 'react';
import axios from '../api/axiosConfig';
import '../components/AdminDashboard.css';

const AdminDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [receives, setReceives] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [donationRes, receiveRes] = await Promise.all([
        axios.get('/care-nest/admin/donations'),
        axios.get('/care-nest/admin/receives'),
      ]);
      setDonations(donationRes.data);
      setReceives(receiveRes.data);
    } catch (err) {
      console.error('Fetching error:', err);
    }
  };

  const updateStatus = async (type, id, status) => {
    try {
      await axios.put(`/care-nest/admin/${type}/${id}`, { status });
      fetchData();
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  const deleteRequest = async (type, id) => {
    try {
      await axios.delete(`/care-nest/${type}/${id}`);
      fetchData();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <section>
        <h3>Donation Requests</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Phone</th><th>Type</th><th>Qty</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map(d => (
              <tr key={d.id}>
                <td>{d.name}</td><td>{d.phone}</td><td>{d.type}</td><td>{d.quantity}</td><td>{d.status}</td>
                <td>
                  <button onClick={() => updateStatus('donate', d.id, 'Completed')}>✔</button>
                  <button onClick={() => updateStatus('donate', d.id, 'Pending')}>⏳</button>
                  <button onClick={() => deleteRequest('donate', d.id)}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Receive Requests</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Phone</th><th>Type</th><th>Qty</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {receives.map(r => (
              <tr key={r.id}>
                <td>{r.name}</td><td>{r.phone}</td><td>{r.type}</td><td>{r.quantity}</td><td>{r.status}</td>
                <td>
                  <button onClick={() => updateStatus('receive', r.id, 'Completed')}>✔</button>
                  <button onClick={() => updateStatus('receive', r.id, 'Pending')}>⏳</button>
                  <button onClick={() => deleteRequest('receive', r.id)}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;

