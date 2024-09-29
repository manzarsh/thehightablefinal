import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Aboutme from './src/AboutMe'
import Contact from './src/Contact'
import Services from './src/Services'
import Projects from './src/Projects'
import Layout from './components/Layout'

const MainRouter = () => {
 return (<div>
<Layout/>
 <Routes>

    <Route exact path="/" element={<Home />} />
    <Route exact path="/Aboutme" element={<Aboutme />} />
    <Route exact path="/Services" element={<Services />} />
    <Route exact path="/Projects" element={<Projects />} />
    <Route exact path="/Contact" element={<Contact />} />

</Routes>
</div>
)
}
export default MainRouter

