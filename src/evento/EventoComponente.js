// src/evento/EventoComponente.js
import React, { useState } from 'react';
import './EventoComponente.css'; // Importa el archivo de estilos

const EventoComponente = () => {
  const [puertaAbierta, setPuertaAbierta] = useState(false);

  const togglePuerta = () => {
    setPuertaAbierta(!puertaAbierta);
  };

  return (
    <div className="centrado"> {/* Aplica la clase centrado */}
      <h1>Control de Puertas</h1>
      <img
        src={`/puertas/${puertaAbierta ? 'puertaAbierta.jpeg' : 'puertaCerrada.jpeg'}`}
        alt="Puerta"
      />
      <input type="button" value={puertaAbierta ? 'Cerrar Puerta' : 'Abrir Puerta'} onClick={togglePuerta} />
    </div>
  );
};

export default EventoComponente;
