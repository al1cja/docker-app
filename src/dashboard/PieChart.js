import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Housing', 'Transportation', 'Food', 'Utilities', 'Medical & Healthcare', 'Entertainment', 'Clothes', 'Other'],
  datasets: [
    {
      label: 'Test',
      data: [2000, 300, 1000, 500, 150, 300, 400, 500],
      borderWidth: 1,
      borderColor:'#fff',
    },
  ],
};

const options = {
    plugins: {
        labels: {
            position: 'outside',
            // render: (args) => (`${args.label}: ${args.value}`)
        }
    }
}

const PieChart = () => (
    <Pie data={data}         width={300}
    height={300}
    options={{
        responsive: true,
        plugins: {
            title: 'Test',
            labels: {
                position: 'bottom'
            }
        }
      }} />
)

export default PieChart;