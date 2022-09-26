import './App.css';
import IDC from './Components/ItemDetailConteiner/IDC';
import ITC from './Components/ItemListContainer/ITC';
import BarraNav from './Components/Navbar/BarraNav';
import {Routes, Route} from "react-router-dom";
import Cart from './Components/Cart/Cart';



function App() {
  return (
    <div>
      <BarraNav/>
      <Routes> 
        <Route path="/:id" element={<IDC/>} />
        <Route path="/index" element={<ITC/>} />
        <Route path ="/cart" element={<Cart/>} />        
      </Routes>
    </div>
  )
}

export default App;
