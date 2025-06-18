import React, { useState } from 'react';
import '../components/SignupLogin.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const SignupLogin = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => setIsSignup(!isSignup);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Signup logic
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      alert('Signup successful! Now login.');
      setIsSignup(false);
    } else {
      // Login logic
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (email === 'admin@carenest.com' && password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        navigate('/adminlogin');
      } else if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Invalid credentials. Try again.');
      }
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
      <Footer />
    </div>
  );
};

export default SignupLogin;
