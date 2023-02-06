import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = (item) => {

    return(
         <div className="container py-5"> 
         <div className='row' key={item.id}>
             <div className="col-md-6 py-5">
                 <img src = {item.imagen} className="card-img-top" alt = {item.nombre} />
                 <div className ="card-body"> 
                 <h3 className="card-title"> {item.nombre} </h3>
                 <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur reprehenderit sint blanditiis maxime, molestiae ut. Odio corrupti nisi corporis, veniam magnam ab velit a nulla nostrum, ipsum, modi ex.</p>
                 <h3> ${item.precio}   </h3>
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