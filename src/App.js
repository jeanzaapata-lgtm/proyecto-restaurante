import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './Componentes/Inicio';
import Promociones from './Componentes/Promociones';
import Carta from './Componentes/Carta';
import Reserva from './Componentes/Reserva';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </Router>
  );
}

export default App;