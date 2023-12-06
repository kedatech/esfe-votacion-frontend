import { getById } from '../../../shared/utils/api/concursos.js';
import Spinner from '../../../shared/utils/components/Spinner.jsx';
import SpinnerSmall from '../../../shared/utils/components/SpinnerSmall.jsx';
import { useEffect, useState } from 'react';
import BarChart from './BarChart.jsx';
import PropTypes from 'prop-types';

function ConcursoStats({ Concurso }) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if(categorias.length === 0){
        setLoading(true);
      }
      try {
        const datacategorias = await getById(Concurso.Id);
        setCategorias(datacategorias);
      } catch (error) {
        console.error('Error al obtener los datos de categorias:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, [Concurso.Id]);

  return (
    <>
      {loading && categorias.length === 0 ? (
        <center>
          <center><SpinnerSmall /></center>
        </center>
      ) : (
        categorias.map((el) => {
          const lista = el.Participantes.map((p) => {
            const arr = p.Nombre.split(" ");
            const nombre = arr[0];
            const apellido = arr[2] ? arr[2] : "";
            return `${nombre} ${apellido}`;
          });
          const votos = el.Participantes.map((v) => v.ConteoVotos);

          return (
            <div key={el.Id}>
              <BarChart
                Categoria={el.Nombre}
                participantes={lista}
                Votos={votos}
              />
            </div>
          );
        })
      )}
    </>
  );
}

ConcursoStats.propTypes = {
  Concurso: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    // Agrega aquí las otras propiedades necesarias y sus tipos
  }).isRequired,
};

export default ConcursoStats;

