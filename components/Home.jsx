import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weather Based Tourist Guide</h1>
      <p style={styles.paragraph}>
        Thank You for Visiting! <br />
        Dive into our application and explore the full range of our services. 
        With our app, planning your trip has never been easier—you simply need 
        to pack your bags and enjoy the adventure!
      </p>

      <h2 style={styles.subtitle}>Our Mission</h2>
      <p style={styles.paragraph}>
        At the heart of our mission is a commitment to crafting the perfect trip 
        tailored to your chosen destination and schedule. Our program will create 
        an ideal itinerary for you, considering weather conditions, recommended clothing, 
        and alerts for any sudden changes in the forecast. Let us handle the details while 
        you focus on making unforgettable memories!
      </p>

      <div style={styles.buttonContainer}>
        <Link to="/Contact">
          <button style={styles.button}>
            Fast Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center', 
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#08C2FF',
    marginBottom: '20px',
  },
  subtitle: {
    marginTop: '30px',
    color: 'white',
  },
  paragraph: {
    lineHeight: '1.6', 
    margin: '10px 0', 
    color: 'white', 
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#444',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '16px', 
  },
};