import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({items}) =>{
    return(
        <div className='row'>
            {items.map(item => (
                
                <div className='col-md-3 py-5'>
                <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio} descripcion = {item.descripcion}/>
                <Link to= {`/item/${item.id}`} >
                <button className='btn btn-primary'>Comprar</button></Link>
                <Link to= {`/item/${item.id}`}><button className='btn btn-secondary'>Info</button></Link>
                </div>
                ) 
            )} 
        </div>
    )

}
export default ItemList;