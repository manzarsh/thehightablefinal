export default function Aboutme() {
  return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>About Me</h1>
      <img 
        src="/images/Photo.jpg" 
        alt="Manzar Shikhaliyeva" 
        style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
      />
      <h2> Manzar Shikhaliyeva</h2>
      <p>
        My name is Manzar Shikhaliyeva. 
        I am a student pursuing a degree in Software Engineering Technology 
        at Centennial College. With a keen interest in web development, 
        I strive to create engaging and responsive web applications 
        that provide seamless user experiences. Leveraging my knowledge of 
        both front-end and back-end development, I'm committed to staying 
        up-to-date with the latest technologies and 
        building innovative solutions that drive results.
      </p>
      <p>
      <a href="./images/Resume.pdf" target="_blank" rel="noopener noreferrer">
        Download my Resume (PDF)
      </a>
    </p>
    </div>
  );
}

