import React from 'react';
import './Proyectos.css';

function Proyectos() {
  const proyectos = [
    { nombre: 'Tranqui App', descripcion: 'Aplicación para prevencion del suicidio adolescente, desarrollada por un equipo de trabajo en la E.E.S.T N°5, en el cual forme parte como front-end developer y realicé algunas tares de back-end' },
    { nombre: 'FinGuru', descripcion: 'Trabajé como desarrollador de un curso de JavaScript' }
  ];

  return (
    <section className="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto">
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
