import React from 'react';

const CardProductos = () => {
    return (
        <>
        <div className='tamaño'>
        <div className="card mb-3 hola">
          
          <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width= "40rem" height= "25rem" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Imagen</text>
          </svg>
          <div className="card-body">
            <p className="card-text">Pequeña descripcion estado del producto</p>
          </div>
          
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Caracteristicas
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                    <div className="accordion-body"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem facilis aliquid excepturi modi. Laboriosam rem at, quas impedit, ipsam debitis sint incidunt iste quisquam dolores aliquam alias. Vitae, ipsa?
                    A minima cum ex accusamus voluptatem temporibus amet, doloribus nisi soluta saepe doloremque mollitia voluptate, fuga deserunt vel optio accusantium aut laborum? Facilis repellendus aliquid libero nobis quas sed id.</p></div>
                </div>
            </div>
        </div>
        </div>

        {/* Nombre del producto y precio */}
        <div className="card tamañoCardNombre">
          <div className="card-body">
            <h3 className="card-title">Nombre del Producto</h3>
            <h6 className="card-subtitle mb-2 text-muted">Cantidad Disponible</h6>
            <h4>Precio</h4>
            <button type="button" className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
        </>
    );
}

export default CardProductos;
