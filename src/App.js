import './App.css';
import IDC from './Components/ItemDetailConteiner/IDC';
import ITC from './Components/ItemListContainer/ITC';
import BarraNav from './Components/Navbar/BarraNav';
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div>
      <BarraNav/>
      <Routes>
        <Route path="/index" element={<ITC/>}/>
        <Route path="/cursos/:url" element={<IDC/>}/>
        <Route/>
        <Route/>
      </Routes>

    </div>
  )
}

export default App;
