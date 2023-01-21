
const ItemListContainer = ({greting}) => {
    return (
        // Este es un ejemplo de children. Los children estan encerrados en etiquetas que abren y etiquetas que cierran, en este caso h1. greting es la referencia al valor que le pasamos del componente padre
            <h1 className="titulo">{greting}</h1>
    )
}

export default ItemListContainer;