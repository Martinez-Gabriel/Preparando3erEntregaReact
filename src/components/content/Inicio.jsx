import React, {useState, useEffect, useContext} from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';
import { DarkModeContext } from '../../components/context/darkModeContext';
import {Link} from 'react-router-dom'
const Home = () => {
    const [productos, setProductos] = useState([]);

    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            const cardProducto = productos.map(producto => 
                <div className="card cardProducto animacion-btn m-4" key={producto.id}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Tipo: {producto.tipo}</p>
                            <p className="card-text">Marca: {producto.marca}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock: {producto.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
            })
    }, []);


    


    return (
        <div className="row containerProductos d-flex justify-content-center">
            <h1 className='d-flex justify-content-center p-4'>Tienda APK!</h1>
            {productos}     
        </div>      
        
    );
}

export default Home;
