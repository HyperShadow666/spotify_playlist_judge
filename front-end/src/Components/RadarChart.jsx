import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Python', 'Java', 'SQL', 'PowerBI', 'Spark', 'ML'],
  datasets: [
    {
      label: 'Skills',
      data: [8, 7, 8, 7, 6, 8],
      backgroundColor: 'rgba(156, 188, 217, 0.2)',
      borderColor: 'rgba(156, 188, 217, 1)',
      borderWidth: 1,
    },
  ],
};

// Define options for customization
const options = {
  responsive: true,
  scales: {
    r: {
      ticks: {
        display: false, // Hide the numbers (ticks) on the scale
      },
      angleLines: {
        display: true, // Display lines from the center to each point
        color: 'rgba(120, 120, 120, 120)' // Change the color of the grid lines
      },
      grid: {
        color: 'rgba(120,120,120,120)' // Change the grid background color
      },
      pointLabels: {
        color: '#fff' // Change the color of the point labels
      },
      suggestedMin: 0, // Suggested minimum value for the scale
      suggestedMax: 10, // Suggested maximum value for the scale
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top', // Position of the legend (top, left, bottom, right)
    },
    tooltip: {
      enabled: true, // Enable tooltips
    },
  },
};

const RadarChart = () => {
  return (
      <Radar className='m-2' data={data} options={options} />

    // </div>
  )

};

export default RadarChart;
