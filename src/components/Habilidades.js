import React, { useState } from 'react';
import './Habilidades.css';

function Habilidades() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);
  const habilidades = ['HTML', 'CSS', 'Java', 'JavaScript', 'React', 'ReactNative', 'Node.js', 'C++'];
  
  return (
    <section className="habilidades">
      <h2>Habilidades</h2>
      <button onClick={() => setMostrarHabilidades(!mostrarHabilidades)}>
        {mostrarHabilidades ? 'Ocultar' : 'Mostrar'} Habilidades
      </button>
      {mostrarHabilidades && (
       <div className="habilidades-container">
          {habilidades.map((habilidad, index) => (
            <div key={index} className="habilidad-item">
              {habilidad}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Habilidades;