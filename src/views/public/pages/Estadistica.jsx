import { getAll } from '../../../shared/utils/api/concursos.js';
import { useEffect, useState } from 'react';
import ConcursoStats from "../components/ConcursoStats";
import CarrerasStats from '../components/CarrerasStats.jsx';

function Estadistica() {
  const [concursos, setConcursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataConcursos = await getAll();
        setConcursos(dataConcursos);

      } catch (error) {
        console.error('Error al obtener los datos de concursos:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="stats-concursos">
        {
          concursos.length === 0 
          ? <center><h1>¡Ups! No hay ningún Concurso Activo</h1></center>
          : concursos.map( el => (
            <div key={el.Id}>
            <center><h1>{el.Nombre}</h1></center>
            <ConcursoStats Concurso={el}/>
          </div>
            ))
        }
        <hr />
        <center><h1>Votos Totales por Carrera</h1></center>
      <CarrerasStats />
    </div>
  )
}
export default Estadistica