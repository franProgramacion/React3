import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({id, nombre, imagen, descripcion, precio}) => {

    return(
         <div className="container py-5"> 
         <div className='row' key={id}>
             <div className="col-md-6 py-5">
                 <img src = {imagen} className="card-img-top" alt = {nombre} />
                 <div className ="card-body"> 
                 <h3 className="card-title"> {nombre} </h3>
                 <p className="card-text"> {descripcion}</p>
                 <h3> ${precio} </h3>
                 <div>
                     <ItemCount stock ={10} initial = {1} onAdd = {0} />
                 </div>
 
             </div>
 
             </div>
 
             </div>
 
             </div>
     );
 
     };
 
 export default ItemDetail;