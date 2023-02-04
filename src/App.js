import './App.css';
// Importo los componentes
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*Aqui se colocan todos los componentes */}
      <Header/>
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/categoria/:tipo' element={<ItemListContainer/>} />
              <Route path='/item/:id' element={<ItemDetailContainer />} /> 
              {/*} <Route path='/cart' element={</>} /> 
               <Route path='/checkout' element={<ItemDetailContainer />} /> {*/}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
