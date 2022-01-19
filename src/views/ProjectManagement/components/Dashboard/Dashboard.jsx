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

import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import {
  getAllProjects,
  getDashbordByProjectId,
  getDashbordData,
  getIfDashbordByProjectIdLoading,
  // getDashbordByProjectIdError,
} from '../../../../redux/project-management-redux/project.selector';
import {
  dashbordByProjectId,
  getProjectList,
  projectDashbord,
} from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import { taskByProject } from '../../../../redux/worklist-management-redux/worklist.actions';
import { getTasksByProject } from '../../../../redux/worklist-management-redux/worklist.selector';

const Dashboard = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const dashboardData = useSelector(getDashbordData);
  const allProjectList = useSelector(getAllProjects);
  const dashbordByProjectIdData = useSelector(getDashbordByProjectId);
  const taskDetailsByProject = useSelector(getTasksByProject);
  const isGetDashbordByProjectIdLoading = useSelector(
    getIfDashbordByProjectIdLoading
  );
  const [actualLabels, setActualLabels] = React.useState('');
  const [efficencyData, setEfficencyData] = React.useState('');
  const [completedData, setCompletedData] = React.useState('');
  const [selectedProject, setSelectedProject] = React.useState('');
  const [pieData, setPieData] = React.useState([0, 0, 0]);

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
        data: pieData,
        backgroundColor: [
          'rgba(54, 162, 235, 0.9)',
          'rgba(255, 99, 132, 0.9)',

          'rgba(255, 206, 86, 0.9)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleChange = (e) => {
    setSelectedProject(e.target.value);
    const dataToSend = { authToken, projectId: e.target.value };
    dispatch(dashbordByProjectId(dataToSend));
    dispatch(taskByProject(dataToSend));
  };

  React.useEffect(() => {
    if (!dashboardData) {
      dispatch(projectDashbord(authToken));
      setTimeout(() => {
        dispatch(getProjectList(authToken));
      }, 1000);
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

    if (dashbordByProjectIdData?.Approved >= 0) {
      setPieData([
        dashbordByProjectIdData?.Completed,
        dashbordByProjectIdData?.NotAssigned,
        dashbordByProjectIdData?.NotStarted,
      ]);
    }
  }, [dashboardData, dashbordByProjectIdData]);
  return (
    <div className="project-management-dashboard-base-div">
      <GlobalSpinner isOpen={isGetDashbordByProjectIdLoading} />
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
          <h5>Project Status</h5>

          <select onChange={handleChange}>
            <option>Select Project</option>
            {allProjectList.map((val) => (
              <option key={val.id} value={val.id}>
                {val.name}
              </option>
            ))}
          </select>
        </div>
        {/*  eslint-disable */}
        <div className="pm-dg-wrap">
          {selectedProject ? (
            dashbordByProjectIdData?.Approved >= 0 ? (
              <Pie
                className="project-management-dashbord-pie"
                data={chartData}
              />
            ) : (
              <p>No Task Not Found!</p>
            )
          ) : (
            <p> Please Select A Project</p>
          )}
        </div>
      </div>
      {/*  eslint-enable */}

      <div className="project-management-dashoard-table-2">
        <h5>
          <span className="rect-wrap" />
          Completed
        </h5>
        {!selectedProject ? (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            {' '}
            Please Select A Project
          </p>
        ) : (
          taskDetailsByProject.length !== 0 && (
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
                {taskDetailsByProject.map((vals) => (
                  <tr key={vals?.taskId}>
                    <td>{vals?.taskId}</td>
                    <td> {vals?.taskName} </td>
                    <td> {vals?.taskDescription} </td>
                    <td>{vals?.isMilestone === 1 ? 'No' : 'Yes'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
