

const Item = ({id, nombre, imagen, precio, descripcion}) =>{
    return(
        
            <div className="card">
                <img src={imagen} className="card-img-top" alt={nombre}/>
                    <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">${precio}</p>
                        <p>{descripcion}</p>
                    </div>
                </div>
            
    )

}
export default Item;