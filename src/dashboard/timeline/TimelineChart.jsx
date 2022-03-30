import React from 'react';
import styled from 'styled-components';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChartWrapper = styled.div`
  height: 500px;
  width: 80%;
  margin: 50px 0;
`

const getValues = (filteredDates, expenseData) => {
  const values = []

  for (const date of filteredDates) {
    const dateValue = expenseData
      .filter(expense => expense.date === date)
      .map(expense => expense.price)
      .reduce((prev, curr) => prev + curr)
    values.push(dateValue)
  }
  
  return values;
} 

const TimelineChart = ({ expenseData }) => {
  const dates = expenseData.map(expense => expense.date)
  const filteredDates = dates.filter((value, index) => dates.indexOf(value) === index)

  const values = getValues(filteredDates, expenseData);
 
  const chartData = {
    labels: filteredDates,
    datasets: [
      {
        data: values,
        backgroundColor: [
          'rgb(232, 145, 111)'
        ]
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  }

  return (
    <BarChartWrapper>
        <Bar data={chartData} options={options}  />
    </BarChartWrapper>
  )
}

export default TimelineChart;