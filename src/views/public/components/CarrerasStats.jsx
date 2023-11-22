import { getCarrerasVotes } from '../../../shared/utils/api/estadisticas.js';
import { useEffect, useState } from 'react';
import PieChart from './PieChart.jsx';

export default function CarrerasStats() {
    const [carreras, setCarreras] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCarreras = await getCarrerasVotes();
        setCarreras(dataCarreras);
      } catch (error) {
        console.error('Error al obtener los datos de concursos:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      {
        carreras.length === 0 ?
        <center><h2>Aun no hay estadísticas que mostrar</h2></center> :
        <div>
          <PieChart Carreras={carreras.map(m => m.Carrera + " " + m.TotalVotos.toString() + " votos")} Votos={carreras.map(m => m.TotalVotos)} />
        </div>
      }
    </>
  );
    }  