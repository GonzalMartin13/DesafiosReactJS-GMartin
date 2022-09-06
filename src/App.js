import './App.css';
import ITC from './Components/ItemListContainer/ITC';
import BarraNav from './Components/Navbar/BarraNav';
import ItemCount from './Components/ItemCount/ItemCount'; 


function App() {
  return (
  <div classname="container-fluid">
    <BarraNav/>
    <ITC/>
    <ItemCount initial={0} cantidad = {5} carro={0} />
  </div>
  )
}

export default App;
