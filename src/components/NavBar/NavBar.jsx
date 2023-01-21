// Importo los estilos del navbar del css
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

//Creo el componente del menu de navegacion
const NavBar = () => {
    return (
        <nav>
            <div className="NavBar">
                <button className="botones">Perfumes</button>
                <button className="botones">Desodorantes</button>
                <button className="botones">Cuidados diarios</button>
                <button className="botones">Jabones</button>
                <CartWidget/>
            </div>
            
        </nav>
    )
}
// Exporto el componente
export default NavBar;