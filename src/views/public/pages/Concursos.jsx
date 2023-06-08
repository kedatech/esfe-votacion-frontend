import { useEffect, useState } from 'react';
import { getAll } from '../../../shared/utils/api/concursos.js';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

function Concursos({handleDelete=null, handleEdit=null}) {
  // const {handleDelete, handleEdit } = props
  const [concursos, setConcursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        console.log(data)
        setConcursos(data);
      } catch (error) {
        console.error('Error al obtener los datos de concursos:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='concursos'>
      {
        concursos?.map(el=>(
          <div key={el.Id}>
          <Link className='card-concurso' to={`categorias/${el.Id}`}>
            <h2>{el.Nombre}</h2>
            
            <img src="/icons/baile-icon.png" alt="" />
            
            <div>
              <p>{el.Descripcion}</p>
              <p>{el.Tipo}</p>
              {el.Activo
              ?<b className='green'>Activo</b>
              :<b className='red'>Finalizado</b>}
            </div>
          </Link>
            {
              handleDelete !== null && handleEdit !== null ? 
              <div>
                <button onClick={handleDelete}>Eliminar</button>
                <button onClick={handleEdit}>Editar</button>
                <br />
              </div> :null
              
            }
          </div>
        ))
      }
    </div>
  );
}

Concursos.propTypes = {
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
}
export default Concursos;
