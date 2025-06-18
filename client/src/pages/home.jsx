import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import '../App.css';
import missionImg from '../assets/mission.jpg';
import visionImg from '../assets/vision.jpg';
import { motion } from 'framer-motion';
import Footer from './Footer.jsx';
import '../components/Home.css';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <motion.div
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="homepage">
        <section className="hero fade-in">
          <h1 className="hero-title">Welcome to Care-Nest</h1>
          <p className="hero-subtitle">Bringing hope through food and clothing donations</p>
          <div className="button-container">
            <button className="donate-btn" onClick={() => navigate('/donate')}>
              Donate 
            </button>
            <button className="receive-btn" onClick={() => navigate('/receive')}>
              Receive 
            </button>
          </div>
        </section>

        {/* Wrapped Mission and Vision in a separate container */}
        <section className="grid-section column-layout">
          <div className="grid-card fade-in">
            <img src={missionImg} alt="Our Mission" className="card-img" />
            <h2 className="card-title">Our Mission</h2>
            <p className="card-text">Our mission is to provide food and clothing to the underprivileged, ensuring no one is left hungry or without clothing.</p>
          </div>

          <div className="grid-card fade-in">
            <img src={visionImg} alt="Our Vision" className="card-img" />
            <h2 className="card-title">Our Vision</h2>
            <p className="card-text">To create a world where everyone has access to basic needs, regardless of their circumstances</p>
          </div>
        </section>
      </div>
       <Footer/>
    </motion.div>
  );
};

export default Home;









