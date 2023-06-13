import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: true,
};

export default function PieChart({Carreras, Votos}) {

    var data = {
        labels: Carreras,
        datasets: [
            {
                label: 'Votos Totales',
                data: Votos,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1.7,
            },
        ],
    };

    return (
        <div className='PieContainer'>
            <Pie className='PieChart' data={data} options={options} />
        </div>
    );
}