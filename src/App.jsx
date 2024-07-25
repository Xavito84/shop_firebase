import React, {  } from 'react';
import './main.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/Contacto';
import { CardProvider } from './context/CardContext';
import Carrito from './components/Carrito';
import { CheckOut } from './components/CheckOut';

function App() {
  

  return (
    <div>
      <CardProvider >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<CheckOut />} />

          </Routes>
        </BrowserRouter>
      </CardProvider>
      
    </div>
  );
}

export default App;
