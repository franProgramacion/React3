import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import catalogo from "../../../json/catalogo"

const ItemDetailContainer = () => {

    const [item, setItem] = useState ([]);

    const {id} = useParams()
    console.log (id);
     useEffect(() => {
 
         const promesa = (id) => 
         new Promise ((resolve, reyect) =>{
             setTimeout(()=> {
                 resolve(catalogo.find( prod => prod.id === id));
         }, 3000);
             } );
 
             promesa(id)
             .then ((response) => {
                 setItem(response);
             })
             .catch ((error) => {
                 console.log (error);
             } )
    }, [id]);
 
 
 
     return(
     <div>
             <ItemDetail item = {item}/>
             </div>
 
     );
 
     };
 
 export default ItemDetailContainer;