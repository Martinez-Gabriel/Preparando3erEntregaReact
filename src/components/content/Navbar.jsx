import { Link } from 'react-router-dom';
import Dropdown from '../layouts/Dropdown';
import Secciones from '../layouts/Secciones';

const Navbar = ({contador}) => {
  const listDrowdon = ["Procesadores", "Motherboards", "Placas de Video", "Memorias RAM"]
  
    return (
        <> 
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark navEstilos">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">GabrielAPK</a>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <Secciones/>
                <Dropdown lista = {listDrowdon}/>
              </ul>
            </div>
            <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/carrito"><button className='btn btn-dark'><img src="../icon/carrito.png" alt="carrito icon" /></button></Link>
                  </li>
                    
                </ul>
          </div>
        </nav>
        </>
    );
}

export default Navbar;
