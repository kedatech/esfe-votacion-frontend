import React, { useEffect, useState } from 'react';
import ConcursoStats from "../components/ConcursoStats";
import CarrerasStats from '../components/CarrerasStats.jsx';
import Spinner from '../../../shared/utils/components/Spinner.jsx';
import { getAll } from '../../../shared/utils/api/concursos.js';


function Estadistica() {
  const [concursos, setConcursos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if(concursos.length === 0){
      setLoading(true);
    }
    try {
      const dataConcursos = await getAll();
      setConcursos(dataConcursos);
    } catch (error) {
      console.error('Error al obtener los datos de concursos stats:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(); // Cargar datos al montar el componente

    const refreshInterval = setInterval(() => {
      console.log("refresh")
      fetchData(); // Llamar a fetchData cada 3 segundos
    }, 113000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(refreshInterval);
  }, []); // La dependencia vacía garantiza que solo se ejecute al montar y desmontar el componente

  return (
    <div className="stats-concursos">
      {loading ? <center><Spinner /></center> : null}

      {!loading && concursos.map(el => (
        <div key={el.Id}>
          {/* <center><h1>{el.Nombre}</h1></center> */}
          <ConcursoStats Concurso={el} />
        </div>
      ))}
    </div>
  );
}

export default Estadistica;
