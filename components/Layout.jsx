import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '0.5em 0'
};

const titleStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: 'white'
};

const logoStyle = {
  width: '200px',
  marginRight: '10px' 
};

const textStyle = {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  marginLeft: '10px'
};

export default function Layout() {
  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}>
          <Link to="/" style={titleStyle}>
            <img
              src="./images/logo.png"
              alt="My Logo"
              style={logoStyle}
            />
            <span style={textStyle}>My Portfolio</span>
          </Link>
        </h1>
      </header>
      <br />
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/AboutMe">About Me</Link> | 
        <Link to="/Services">Services</Link> | 
        <Link to="/Projects">Projects</Link> | 
        <Link to="/Contact">Contact</Link>
      </nav>
      <br />
      <hr />
    </>
  );
}
