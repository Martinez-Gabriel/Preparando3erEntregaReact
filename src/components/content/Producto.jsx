import React, {useState, useEffect, useContext} from 'react';
import DetalleProducto from './DetalleProducto'
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase';
import { DarkModeContext } from '../../components/context/darkModeContext';
const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
       getProducto(id).then(prod => {
        setProducto(prod)
        })
   
    }, [])

   if (producto.length != 0) {
    return (
            <div className={darkMode ? 'darkMode card m-4 containerProductos d-flex justify-content-center' : 'card m-4 containerProductos d-flex justify-content-center'}>
                <DetalleProducto producto={producto}/>
   
            </div>
    )
}}

export default Producto;
