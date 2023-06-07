import { useEffect, useState } from 'react';
import { getAll } from '../../../shared/utils/api/concursos.js';
import {Link} from 'react-router-dom'

function Concursos() {
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
          <Link className='card-concurso' to={`categoria/${el.Id}`} key={el.Id}>
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
        ))
      }
    </div>
  );
}

export default Concursos;
