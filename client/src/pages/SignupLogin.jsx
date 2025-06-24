import React, { useState, useEffect } from 'react';
import '../components/SignupLogin.css';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosConfig';

const SignupLogin = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (isAdmin) {
      console.log("🔁 Redirecting to Admin Dashboard...");
      navigate('/admin');
    } else if (loggedInUser) {
      console.log("🔁 Redirecting to Home...");
      navigate('/');
    }
  }, [navigate]);

  const toggleForm = () => setIsSignup(!isSignup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        const res = await axios.post('/care-nest/users/signup', { email, password });
        console.log('✅ Signup success:', res.data);
        alert('Signup successful! Now login.');
        setIsSignup(false);
      } else {
        if (email === 'admin@gmail.com' && password === 'admin123') {
          console.log("✅ Admin credentials matched");
          localStorage.setItem('isAdmin', 'true');
          navigate('/admin');
        } else {
          const res = await axios.post('/care-nest/users/login', { email, password });
          console.log('✅ User login success:', res.data);
          localStorage.setItem('loggedInUser', JSON.stringify(res.data));
          alert('Login successful!');
          navigate('/');
        }
      }
    } catch (error) {
      console.error('❌ Auth error:', error);
      alert('Invalid credentials or server error. Try again.');
    }
  };

  return (
    <div className="signup-login-container">
      <h2>{isSignup ? 'Signup' : 'Login'}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
      </form>
      <p onClick={toggleForm} className="toggle-link">
        {isSignup ? 'Already have an account? Login' : "Don't have an account? Signup"}
      </p>
    </div>
  );
};

export default SignupLogin;



