import './App.css';
// Importo los componentes
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      {/*Aqui se colocan todos los componentes */}
      <Header/>
      <NavBar/>
      {/*Este es un ejemplo de paso de valores por props a un children */}
      <ItemListContainer greting = "Hola mundo"/>
    </div>
  );
}

export default App;
