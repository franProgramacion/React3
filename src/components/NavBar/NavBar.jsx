// Importo los estilos del navbar del css
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

//Creo el componente del menu de navegacion
const NavBar = () => {
    return (
        <nav>
            <div className='gridContainerResponsive NavBar'>
                    <Link className="botones" to={"/"} >Home</Link>
                    <Link className="botones" to={"/categoria/perfumeria"} >Perfumes</Link>
                    <Link className="botones" to={"/categoria/desodorantes"}>Desodorantes</Link>
                    <Link className="botones" to={"/categoria/cremas"}>Cuidados diarios</Link>
                    <Link className="botones" to={"/categoria/jabones"}>Jabones</Link>
                <CartWidget/>
            </div>
            
        </nav>
    )
}
// Exporto el componente
export default NavBar;