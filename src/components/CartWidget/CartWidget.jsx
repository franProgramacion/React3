import "./CartWidget.css"
import carrito from "../../imagenes/carrito.png"

const CartWidget = () => {
    return (
        <>
        {/*En lugar de pasar link con la imagen, la importo */}
        <img src={carrito} alt='carroCompra' className="carrito" />
        <span>10</span>
        </> )
} 

export default CartWidget;