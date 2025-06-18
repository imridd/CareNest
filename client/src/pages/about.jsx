import React from 'react';
import Footer from './Footer';
import '../App.css';
import '../components/about.css';
import teamImage from '../assets/team.png'; 
const About = () => {
  return (
    <div className="about-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* About Us Section */}
      <section
        style={{
          padding: '60px 20px',
          background: 'linear-gradient(to right, #FEEFFF, #D3EAFE)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333',
          }}
        >
          About Care-Nest 💖
        </h1>
        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#555',
          }}
        >
          Care-Nest is a heartfelt initiative built to connect donors and receivers of food and clothes across communities. We believe in the power of small actions to create meaningful impact. Together, we ensure that no plate stays empty and no wardrobe goes bare.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section
        style={{
          background: 'linear-gradient(to right, #D3EAFE, #FFE0F7)',
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px',
          }}
        >
          Meet the Team 💡
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6',
          }}
        >
          We're a team of dreamers and doers — passionate developers and volunteers working to make donation and help more accessible for everyone. 💫
        </p>

        <img
          src={teamImage}
          alt="CareNest Team"
          style={{
            width: '80%',
            maxWidth: '500px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(255, 135, 202, 0.4)',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </section>
      <Footer />
    </div>
    
  );
};

export default About;





  