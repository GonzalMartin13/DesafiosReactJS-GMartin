import './App.css';
import IDC from './Components/ItemDetailConteiner/IDC';
import ITC from './Components/ItemListContainer/ITC';
import BarraNav from './Components/Navbar/BarraNav';



function App() {
  return (
    <div classname="container-fluid">
      <BarraNav/>
      {/* <ITC/> */}
      <IDC/>
    </div>
  )
}

export default App;
