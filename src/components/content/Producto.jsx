import React, {useState, useEffect, useContext} from 'react';
import DetalleProducto from './DetalleProducto'
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';
import { DarkModeContext } from '../../components/context/darkModeContext';
const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
       consultarBDD('../json/productos.json').then(productos => {
        const producto1 = productos.find(productoArray => productoArray.id == id)
        setProducto(producto1)
       })
   
    }, [])

    return (
        
            <div className="card m-4 containerProductos d-flex justify-content-center">
                <DetalleProducto producto={producto}/>
            </div>

       
    );
}

export default Producto;
