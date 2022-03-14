import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Homescreen from './components/Homescreen';
import Project from './components/Project';
import Skills from './components/Skills';


function App() {
  return (
    <div>
      <Header/>
      <Homescreen/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
