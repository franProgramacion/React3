import "./Header.css"
import Logo from "../../imagenes/Logo.png"

//Componente basado en funcion. En todo mi programa aplicare componentes basados en funciones
const Header =() => {
    // Cada componente tiene que retornar un unico elemento. Debemos usar la palabra reservada return. Uso un div para devolver mas de un elemento
    return (
            <div className="cabecera">
                <img src={Logo} alt='logo' className="imag" />
                <h1 className='titulo'> Eco Natural: Tienda oficial de Natura en Santiago del Estero</h1>
            </div>
            )
       }      

    
       

export default Header;