import React from 'react';

const WorkListCards = () => {
  return (
    <div>
      {' '}
      <div className="work-list-table-header">
        <span>
          <input type="checkbox" />
        </span>

        <span>
          <p> Task id </p>
        </span>

        <span>
          <p> Task Name </p>
        </span>

        <span>
          <p> Task Description </p>
        </span>

        <span>
          <p> Ismilestone </p>
        </span>

        <span>
          <p> Type </p>
        </span>

        <span>
          <p> Status </p>
        </span>

        <span>
          <p> Actions </p>
        </span>
      </div>
    </div>
  );
};

export default WorkListCards;
