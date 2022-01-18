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
import { useDispatch, useSelector } from 'react-redux';

import { getDashbordData } from '../../../../redux/project-management-redux/project.selector';
import { projectDashbord } from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const Dashboard = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const dashboardData = useSelector(getDashbordData);
  const [actualLabels, setActualLabels] = React.useState('');
  const [efficencyData, setEfficencyData] = React.useState('');
  const [completedData, setCompletedData] = React.useState('');

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

  const data = {
    labels: actualLabels,
    datasets: [
      {
        label: '% Completion',
        data: completedData,
        backgroundColor: '#BB89FB',
      },
    ],
  };

  const effiecncyData = {
    labels: actualLabels,
    datasets: [
      {
        label: '% Efficency',
        data: efficencyData,
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

  React.useEffect(() => {
    if (!dashboardData) {
      dispatch(projectDashbord(authToken));
    } else {
      const lables = [];
      const completed = [];
      const efficency = [];
      dashboardData.map((vals) => lables.push(vals.Projects.name));
      dashboardData.map((vals) => completed.push(vals?.Completion));
      dashboardData.map((vals) => efficency.push(vals?.Efficiency));
      setActualLabels(lables);
      setCompletedData(completed);
      setEfficencyData(efficency);
    }
  }, [dashboardData]);
  return (
    <div className="project-management-dashboard-base-div">
      <div className="project-management-dashoard-graph graph-1">
        <h5>% Completion</h5>
        <div className="pm-dg-wrap">
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="project-management-dashoard-graph graph-2">
        <h5>Efficiency</h5>

        <div className="pm-dg-wrap">
          <Bar data={effiecncyData} options={options} />
        </div>
      </div>

      <div className="project-management-dashoard-table-1">
        <h5>Overview</h5>

        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>% Completion</th>
              <th>Nr Task</th>
              <th>Nr Days Worked</th>
              <th>Nr Days Spanned</th>
              <th>Nr Task Change</th>
              <th>Efficency</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData &&
              dashboardData.map((vals) => (
                <tr key={vals?.Projects.id}>
                  <td> {vals?.Projects.name}</td>
                  <td> {vals?.Completion}</td>
                  <td> {vals?.NrTasks} </td>
                  <td>-</td>
                  <td>{vals?.NrTasksSpanned}</td>
                  <td>{vals?.NrTasksChanges}</td>
                  <td>{vals?.Efficiency}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="project-management-dashoard-graph-3">
        <div className="head-wrap-1">
          {' '}
          <h5>Efficiency</h5>
        </div>
        <div className="pm-dg-wrap">
          <Pie className="project-management-dashbord-pie" data={chartData} />
        </div>
      </div>
      <div className="project-management-dashoard-table-2">
        <h5>
          <span className="rect-wrap" />
          Completed
        </h5>
        <table>
          <thead>
            <tr>
              <th>Task Id</th>
              <th>Task Name</th>
              <th>Task Description</th>
              <th>Is Milestone</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
