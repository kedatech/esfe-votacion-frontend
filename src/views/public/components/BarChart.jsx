import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function BarChart({ 
    Categoria="Prueba", 
    Votos=[1,2,0,5,3,4,8,6,9,10],
    participantes=["esto","es","una","prueba","en","caso","de","ser","null"]}) {

    var categoria = Categoria
    var votos = Votos
    var participantes = participantes

   var midata = {
        labels: participantes,
        datasets: [
            {
                label: 'Votos Recibidos',
                data: votos,
                backgroundColor: '#427afb'/*#00988d*/
            }
        ]
    }

    var misoptions = {
        responsive : true,
        animation : true,
        plugins : {
            legend : {
                display : false
            }
        },
        scales : {
            y : {
                max: Math.max(...votos) +1,
                min : 0
            },
            x: {
                ticks: { color: '#3261cb'}
            }
        }
    };

    return (
        <div className='BarlineContainer'>
            <h2 className='category'>{categoria}</h2>
            {
                votos.length === 0 ? <h3>Aún no hay votos para mostrar</h3> : <Bar data={midata} options={misoptions} className='BarChart'/>
            }
           
        </div>
    )
}

BarChart.propTypes = {
    Categoria: PropTypes.string,
    Votos: PropTypes.arrayOf(PropTypes.number),
    participantes: PropTypes.arrayOf(PropTypes.string),
  };