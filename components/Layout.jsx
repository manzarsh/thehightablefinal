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
  width: '1200px',
  padding : '0 px'
};


export default function Layout() {
  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}>
          <Link to="/" style={titleStyle}>
            <img
              src="./images/Logo1.png"
              alt="My Logo"
              style={logoStyle}
            />
          </Link>
        </h1>
      </header>
      
      <nav style={{float: 'left', fontsize: 'x-large'}}>
        <Link style={{color: '#08C2FF'}} to="/">Home</Link> | 
        <Link style={{color: '#08C2FF'}} to="/AboutUs">About Us</Link> | 
        <Link style={{color: '#08C2FF'}} to="/ActivitySuggestions">Activity Suggestions</Link> | 
        <Link style={{color: '#08C2FF'}} to="/TripPlanner">Trip Planner</Link> | 
        <Link style={{color: '#08C2FF'}} to="/Contact">Contact</Link> |
        <Link style={{color: '#08C2FF'}} to="/WeatherForecast">Weather Forecast</Link>
      </nav>
    </>
  );
}
