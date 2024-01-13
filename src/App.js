// src/App.js
import React from 'react';
import Header from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Achievements } from './components/Achievements';
import { Clients } from './components/Clients';
import { Customers } from './components/Customers';
import { Frame } from './components/Frame';
import Footer from './components/Footer';

import './App.css'; // Assurez-vous d'avoir le fichier App.css dans le même dossier

function App() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Clients/>
      <Achievements/> 
      <Customers/>
      <Frame/>
      <Footer/>
    </div>
  );
}

export default App;
