/* 
File Name: App.jsx
Student's Name: Manzar Shikhaliyeva
Student ID: 301398294
Date: 2024-09-26
*/




import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
 return (
 <Router>

 <MainRouter />

 </Router>
 );
};
export default App;

