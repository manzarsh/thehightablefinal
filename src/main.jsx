import { AuthProvider } from "./AuthProvider";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import Login from "./firebase_setup/signin.jsx";
import Signup from "./firebase_setup/signup.jsx";
import Profile from "./firebase_setup/Profile.jsx";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />,
          <Route path="login" element={<Login />} />,
          <Route path="Signup" element={<Signup />} />,
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById("root")
);
