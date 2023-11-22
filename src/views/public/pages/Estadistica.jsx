import { getAll } from '../../../shared/utils/api/concursos.js';
import { useEffect, useState } from 'react';
import ConcursoStats from "../components/ConcursoStats";
import CarrerasStats from '../components/CarrerasStats.jsx';
import Spinner from '../../../shared/utils/components/Spinner.jsx';

function Estadistica() {
  const [concursos, setConcursos] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const dataConcursos = await getAll();
        setConcursos(dataConcursos);

      } catch (error) {
        console.error('Error al obtener los datos de concursos:', error);
      }
      setLoading(false)
    };

    fetchData();
  }, []);


  return (
    <div className="stats-concursos">
      {loading ? <center><Spinner /></center> : null}

      {/* Mostrar concursos solo si loading es false */}
      {!loading && concursos.map(el => (
        <div key={el.Id}>
          <center><h1>{el.Nombre}</h1></center>
          <ConcursoStats Concurso={el} />
        </div>
      ))}
      

      {/* Mostrar estadísticas de carreras solo si loading es false */}
      {!loading && (
        <div>
          <hr />
          <center><h1>Votos Totales por Carrera</h1></center>
          <CarrerasStats />
        </div>
      )}
    </div>
  );
}
export default Estadistica