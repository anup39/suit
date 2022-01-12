import './WorkList.scss';
import './components/WorkListCards/WorkListCards.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProjectData } from '../../../../redux/project-management-redux/project.selector';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import { taskByProject } from '../../../../redux/worklist-management-redux/worklist.actions';
import { getTasksByProject } from '../../../../redux/worklist-management-redux/worklist.selector';
import WorkListCards from './components/WorkListCards/WorkListCards';

const WorkList = () => {
  const authToken = useSelector(getUserAuthToken);
  const project = useSelector(getProjectData);
  const worklistTasks = useSelector(getTasksByProject);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const data = { authToken, projectId: project.id };

    dispatch(taskByProject(data));
  }, []);

  return (
    <div className="work-list-base">
      <div className="work-list-header">
        <div className="work-list-input-container">
          <SearchIcon className="work-list-search-icon" />
          <input
            className="work-list-search-input"
            placeholder="Search Worklist"
          />
        </div>
      </div>
      <div>
        <div className="work-list-table-header">
          <span className="work-list-card-check-input">
            <input type="checkbox" />
          </span>

          <span className="work-list-card-task-id">
            <p> Task Id</p>
          </span>

          <span className="work-list-card-task-name">
            <p> Task Name </p>
          </span>

          <span className="work-list-card-task-description">
            <p> Task Description </p>
          </span>

          <span className="work-list-card-task-milestone">
            <p> Ismilestone </p>
          </span>

          <span className="work-list-card-task-type">
            <p> Type </p>
          </span>

          <span className="work-list-card-task-status">
            <p> Status </p>
          </span>

          <span className="work-list-card-task-actions">
            <p> Actions </p>
          </span>
        </div>
        <div className="worklist-table-body">
          {worklistTasks &&
            worklistTasks.map((val) => (
              <WorkListCards key={val.taskId} taskInfo={val} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkList;
