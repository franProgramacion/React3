import React, { useState } from "react";

// Uso de useState para manejar estados. Cantidad, itemStock e itemAdd son los nombres de las constantes que usamos en la logica del contador. Al lado van acompañados por los set que permiten actualizar sus valores. En useState guardamos el valor inicial que tienen los elementos, los cuales son recibidos por props desde app.js
const ItemCount = ({stock, initial, onAdd}) => {
    const[cantidad, setCantidad] = useState(initial); //Arranca con valor 1. Aumenta o disminuye la cantidad de productos a comprar cuando se ejecute los eventos
    const[itemStock, setItemStock] = useState(stock); //Arranca con valor 5. Disminuye cuando se haga click en el evento comprar, cuando se compra un producto
    const[itemAdd, setItemAdd] = useState(onAdd); //Arranca con valor 0. Indica los productos seleccionados antes de que se compren los mismos

// Funcion que pone un tope al decremento de productos para evitar que el contador lleve a numeros negativos
    const decremento = (valor) =>{
       if (valor > -1){
        setCantidad(valor)

       }  
    }

//Funcion que pone un tope a los productos a incrementar. Es para evitar que pasen el limite del stock
    const incremento = (valor) =>{
       if (valor <= itemStock){
        setCantidad(valor);
       }
    }

// Funcion que añade o disminuye productos al carrito segun sea el caso
    const agregarProd = () =>{
        if (cantidad <= itemStock){
            setItemStock (itemStock - cantidad);
            setItemAdd (itemAdd + cantidad);
        }
        
    }
    return(

        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <p>Nombre del producto</p>

                <div className="input-group mb-3">

                    <button className="btn btn-outline-secondary" type="button" id="button-addon1" value="-" onClick={() => {decremento(cantidad - 1)}}>-</button>
                    <input type="text" className="form-control" value={cantidad} onChange={() =>{}}/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1" value="+" onClick={() => {incremento(cantidad + 1)}}>+</button>

                </div>
                <input type="button" className="btn btn-primary" value="Agregar al carrito" onClick={() => {agregarProd()}}/>
                <p>Productos seleccionados: {itemAdd}</p>
            </div>
        </div>

        </div>
    )
}
export default ItemCount;
       