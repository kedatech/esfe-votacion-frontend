import { getById } from '../../../shared/utils/api/concursos.js';
import { useEffect, useState } from 'react';
import BarChart from './BarChart.jsx';
import PropTypes from 'prop-types';

function ConcursoStats({Concurso}) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datacategorias = await getById(Concurso.Id);
        setCategorias(datacategorias);

      } catch (error) {
        console.error('Error al obtener los datos de categorias:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
     {
          categorias.length === 0 
          ?<center><h2 className='no-categories'>No hay categorías para mostrar</h2></center>
          : categorias?.map((el) => {
            const lista = el.Participantes.map((p) => p.Nombre);
            const votos = el.Participantes.map((v) => v.ConteoVotos)
            return (
            <div key={el.Id}>
                <BarChart Categoria={el.Nombre} participantes={lista} Votos={votos}/>
            </div>
            );
        })
        }
      
    </>
  )
}
ConcursoStats.propTypes = {
  Concurso: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    // Agrega aquí las otras propiedades necesarias y sus tipos
  }).isRequired,
};
export default ConcursoStats
