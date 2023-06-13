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
            carreras.length !== 0 ?
            carreras?.map((el) => (
                <PieChart Carreras={[el.Carrera+" "+el.TotalVotos.toString()+" votos"]} Votos={[el.TotalVotos]} />
            ))
            :<center><h2>El conteo de estadísticas Generales estará disponible cuando las carreras empiecen a votar.</h2></center>
        }
    </>

  )
}