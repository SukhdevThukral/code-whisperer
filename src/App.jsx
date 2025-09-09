import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx';

function App(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      < HeroSection />
    </div>
  );  
}



export default App
