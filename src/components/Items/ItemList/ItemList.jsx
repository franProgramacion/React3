
import Item from '../Item/Item';

const ItemList = ({items}) =>{
    return(
        <div className='row'>
            {items.map(item => (
                <div key={item.id} className='col-md-3 py-5'>
                <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio}/>
                </div>) 
            )} 
        </div>
    )

}
export default ItemList;