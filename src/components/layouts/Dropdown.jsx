import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
const Dropdow = ({lista}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const listaDrop = lista.map((categoria, indice) => 
      <Link key={indice} className='dropdown-item' to={`/categoria/${indice +1}${categoria}`}>{categoria}</Link>
    ) 
    setList(listaDrop)
    
  }, []);
   

    return (
        <>
          

          <div class="btn-group">
            <button type="button"  class="btn btn-danger dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
            Filtrar
            </button>
            <ul class="dropdown-menu">
              <li>{list}</li>
            </ul>
          </div>



        </>
    );
}

export default Dropdow;
