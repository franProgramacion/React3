import { Link } from "react-router-dom";

const Item = ({id, nombre, imagen, precio}) =>{
    return(
        
            <div className="card">
                <Link to= {"/item/" + id} ><img src={imagen} className="card-img-top" alt={nombre}/></Link>
                    <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">${precio}</p>
                        <Link to= {"/item/id" + id} className='btn btn-primary'>Comprar</Link>
                        <Link to= {"/item/id" + id} className='btn btn-secondary'>Info</Link>
                    </div>
                </div>
            
    )

}
export default Item;