import React from 'react';
import './Experiencia.css';

function Experiencia() {
  const experiencias = [
    { lugar: 'FinGuru', puesto: 'Creador de Cursos', año: '2024' },
    { lugar: 'TranquiApp', puesto: 'Front-end Developer', año: '2021/2022 -- 2024' }
  ];

  return (
    <section className="experiencias">
      <h2>Experiencia</h2>
      <div className='experiencia-container'>
        {experiencias.map((exp, index) => (
          <div key={index} className='experiencia'>
            <h3>{exp.puesto} en {exp.lugar}</h3>
            <p>{exp.anio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiencia;
