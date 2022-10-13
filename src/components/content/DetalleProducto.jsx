import React, {useState, useContext} from 'react';
import { CarritoContext } from '../../components/context/CarritoContext';
const DetalleProducto = ({producto}) => {
  const [cantidad, setCantidad] = useState(1);
    
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)

    const cantProducto = (operacion) => {
      if(operacion == "+") {
          if(cantidad < producto.stock) {
            setCantidad(cantidad + 1)
          }   
      } else {
        if(cantidad > 1) {
          setCantidad(cantidad - 1)
        }
    }
  }
    return (
        <>
        <div className='tamaño fluid' >  
          <div className="card mb-3 hola">
            
            <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt={producto.nombre} />
              
            
            
          <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Pricipales Caracteristicas
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                      <div className="accordion-body"><p>{producto.caracteristicas}</p></div>
                  </div>
              </div>
          </div>
          </div>

          {/* Nombre del producto y precio */}
          <div className="card tamañoCardNombre">
            <div className="card-body">
              <h3 className="card-title ">{producto.nombre}</h3>
              <h6 className="card-subtitle mb-2 text-muted">Stock Disponible: {producto.stock}</h6>
              <h4>${producto.precio}</h4>
              <p className='card-text'>{cantidad}</p>
              <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>
              <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>
              <button type="button" className="btn btn-primary" onClick={() => agregarProducto(producto, cantidad)}>Añadir a carrito</button>
            </div>
          <div className="card-body d-flex justify-content-center">
              <p className="card-text">{producto.miniDescripcion}</p>
            </div>
          </div>
      </div>
      </>
  

    
    );
}

export default DetalleProducto;




{/* <div className="row g-0">
    <div className="col-md-4">
      <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.modelo}</p>
        <p className="card-text">{producto.marca}</p>
        <p className="card-text">{producto.precio}</p>
        <p className="card-text">{producto.stock}</p>
        <button className='btn btn-dark'>Comprar</button>
        </div>
        </div>
      </div> */}