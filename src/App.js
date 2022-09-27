import './App.css';
import React from 'react';
import IDC from './Components/ItemDetailConteiner/IDC';
import ITC from './Components/ItemListContainer/ITC';
import BarraNav from './Components/Navbar/BarraNav';
import {Routes, Route} from "react-router-dom";
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartContext';
import Item from './Components/item';


function App() {
  return (
    <>
      <CartProvider>
        <BarraNav/>
        <Routes> 
          <Route path="/:id" element={<IDC/>} />
          <Route path="/index" element={<ITC/>} />
          <Route path ="/cart" element={<Cart/>} />        
        </Routes>
      </CartProvider>
    </>
  )
}

export default App;
