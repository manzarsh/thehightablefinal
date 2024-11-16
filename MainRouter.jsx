import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './src/AboutUs';
import Contact from './src/Contact';
import TripPlanner from './src/TripPlanner';
import ActivitySuggestions from './src/ActivitySuggestions';
import WeatherForecast from './src/WeatherForecast';
import Layout from './components/Layout';

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/AboutUs" element={<AboutUs />} />
                <Route exact path="/WeatherForecast" element={<WeatherForecast />} />
                <Route exact path="/TripPlanner" element={<TripPlanner />} />
                <Route exact path="/ActivitySuggestions" element={<ActivitySuggestions />} />
                <Route exact path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    )
}
export default MainRouter