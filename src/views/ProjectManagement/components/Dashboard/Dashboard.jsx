import './Dashboard.scss';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 20, 30, 50, 10, 12, 34, 456, 67, 89, 34],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <div className="project-management-dashboard-base-div">
      <div className="project-management-dashoard-graph-1">
        <Bar data={data} options={options} />
      </div>
      <div className="project-management-dashoard-graph-2">Bar Graph 2</div>
      <div className="project-management-dashoard-table-1">Table</div>
      <div className="project-management-dashoard-graph-3">Graph 3</div>
      <div className="project-management-dashoard-table-2">Table 2</div>
    </div>
  );
};

export default Dashboard;
