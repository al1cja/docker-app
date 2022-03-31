import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Pie } from 'react-chartjs-2';

import '../../variables.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChartWrapper = styled.div`
  width: 80%;
  height: 500px;
  margin: 50px 0;
`

const CategoryChart = ({ categories, values }) => {
  const backgroundColors = [
    '#e8926f', 
    '#e8e46f', 
    '#6f97e8', 
    '#a7e86f',
    '#6fcce8',
    '#e86fa9',
    '#8d6fe8',
    '#e86f6f'
  ]

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  }


  return (
    <CategoryChartWrapper>
      <Pie data={pieData} options={options}/>
    </CategoryChartWrapper>     
  )
}

export default CategoryChart;
