import { useEffect, useState } from 'react';
import { getAll } from '../../../shared/utils/api/concursos.js';

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
    <div>
      {
        concursos?.map(el=>(
          <div key={el.Id}>
            <h2>{el.Nombre}</h2>
            <p>{el.Descripcion}</p>
            <p>{el.Tipo}</p>
            <b>{el.Activo?"Activo":"Finalizado"}</b>
          </div>
        ))
      }
    </div>
  );
}

export default Concursos;
