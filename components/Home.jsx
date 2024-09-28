import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Full Stack Developer Portfolio!</h1>
      <p>Thank you for visiting. <br></br>
      Delve into my portfolio and discover the breadth of my skills, as well as the cutting-edge projects I've successfully delivered, showcasing my passion for innovation and creativity.</p>
      
      <h2>My Mission</h2>
      <p>
      As a dedicated developer, I'm driven to leverage the latest technologies to craft intuitive web applications that make a meaningful impact. My goal is to tackle real-world problems and deliver exceptional digital experiences that inspire users worldwide.</p>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/aboutme">
          <button style={{ backgroundColor: '#444', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', textAlign: 'center' }}>
            Learn More About Me
          </button>
        </Link>
      </div>
    </div>
  );
}