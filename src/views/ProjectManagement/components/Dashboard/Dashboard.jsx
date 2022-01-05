import './Dashboard.scss';

import React from 'react';

import faker from 'faker';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
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
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="project-management-dashboard-base-div">
      <div className="project-management-dashoard-graph-1">
        <Bar data={data} />
      </div>
      <div className="project-management-dashoard-graph-2"> Graph 2 </div>
      <div className="project-management-dashoard-table-1">Table</div>
      <div className="project-management-dashoard-graph-3">Graph 3</div>
      <div className="project-management-dashoard-table-2">Table 2</div>
    </div>
  );
};

export default Dashboard;
