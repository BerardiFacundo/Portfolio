import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Mi Portafolio</h1>
      <p>Desarrollador Web | React | JavaScript</p>
      <img src="/Perfil.jpeg" alt="Foto de perfil" className="perfil" />
    </header>
  );
}

export default Header;
