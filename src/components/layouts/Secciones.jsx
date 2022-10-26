import {memo} from 'react'
import {Link} from 'react-router-dom'

const Secciones = () => {
    return (
        <>
          <li className="nav-item">
            <Link className="nav-link active" to="/"><button className='btn btn-dark'>Inicio</button></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/contacto"><button className='btn btn-dark'>Contacto</button></Link>
        </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/metodoDePago"><button className='btn btn-dark'>Metodos de Pago</button></Link>
        </li>
        </>
    );
}

export default memo(Secciones);
