import React from 'react';
import Header from './components/Header.js';
import SobreMi from './components/SobreMi.js';
import Habilidades from './components/Habilidades.js';
import Experiencia from './components/Experiencia.js';
import Proyectos from './components/Proyectos.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SobreMi />
      <Habilidades />
      <Experiencia />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
