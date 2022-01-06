import './Dashboard.scss';

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const Dashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: '% Completion',
      },
    },
  };

  const labels = ['Proj 1', 'Proj 2', 'Proj 3', 'proj 4', 'Proj 5'];

  const data = {
    labels,
    datasets: [
      {
        label: '% Completion',
        data: [10, 20, 20, 30, 50],
        backgroundColor: '#BB89FB',
      },
    ],
  };

  const effiecncyData = {
    labels,
    datasets: [
      {
        label: '% Efficency',
        data: [50, 40, 30, 20, 10],
        backgroundColor: '#5DA0FF',
      },
    ],
  };

  const chartData = {
    labels: ['Completed', 'Pending', 'Not Started'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.9)',
          'rgba(54, 162, 235, 0.9)',
          'rgba(255, 206, 86, 0.9)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="project-management-dashboard-base-div">
      <div className="project-management-dashoard-graph-1">
        <Bar data={data} options={options} />
      </div>
      <div className="project-management-dashoard-graph-2">
        <Bar data={effiecncyData} options={options} />
      </div>
      <div className="project-management-dashoard-table-1">
        <table>
          <tr>
            <th>Project</th>
            <th>% Completion</th>
            <th>Nr Task</th>
            <th>Nr Days Worked</th>
            <th>Nr Days Spanned</th>
            <th>Nr Task Change</th>
            <th>Efficency</th>
          </tr>

          <tr>
            <td>Project 1</td>
            <td>70 %</td>
            <td>35</td>
            <td>Nr 12</td>
            <td>16</td>
            <td>19</td>
            <td>0.80</td>
          </tr>

          <tr>
            <td>Project 1</td>
            <td>70 %</td>
            <td>35</td>
            <td>Nr 12</td>
            <td>16</td>
            <td>19</td>
            <td>0.80</td>
          </tr>

          <tr>
            <td>Project 1</td>
            <td>70 %</td>
            <td>35</td>
            <td>Nr 12</td>
            <td>16</td>
            <td>19</td>
            <td>0.80</td>
          </tr>

          <tr>
            <td>Project 1</td>
            <td>70 %</td>
            <td>35</td>
            <td>Nr 12</td>
            <td>16</td>
            <td>19</td>
            <td>0.80</td>
          </tr>

          <tr>
            <td>Project 1</td>
            <td>70 %</td>
            <td>35</td>
            <td>Nr 12</td>
            <td>16</td>
            <td>19</td>
            <td>0.80</td>
          </tr>
        </table>
      </div>
      <div className="project-management-dashoard-graph-3">
        <Pie className="project-management-dashbord-pie" data={chartData} />
      </div>
      <div className="project-management-dashoard-table-2">
        <table>
          <tr>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Is Milestone</th>
          </tr>

          <tr>
            <td>Task 1</td>
            <td>Solve Bug</td>
            <td>To solve a bug in media player app</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Task 2</td>
            <td>Solve Bug</td>
            <td>To solve a bug in media player app</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Task 3</td>
            <td>Solve Bug</td>
            <td>To solve a bug in media player app</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Task 4</td>
            <td>Solve Bug</td>
            <td>To solve a bug in media player app</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Task 5</td>
            <td>Solve Bug</td>
            <td>To solve a bug in media player app</td>
            <td>Yes</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
