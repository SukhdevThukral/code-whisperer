import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx'
import SignUp from './components/SignUp.jsx'

function App(){
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path='/' element={<HeroSection/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );  
}



export default App
