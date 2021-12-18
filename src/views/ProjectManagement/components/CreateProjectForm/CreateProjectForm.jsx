import './CreateProjectForm.scss';
import '../../../../theme/ButtonColors.scss';

import React from 'react';

const CreateProjectForm = () => {
  return (
    <div className="create-project-form-base-div">
      <h2>Create Project</h2>
      <form className="create-project-form">
        <label>Project Name</label>
        <input />
        <label>Client</label>
        <input />
        <label>Description</label>
        <textarea rows={6} />

        <label>Start Date</label>
        <input />

        <label>Completion Date</label>
        <input />
      </form>

      <div className="create-project-form-submit-div">
        <span className="cancel-button">Cancel</span>
        <span className="submit_button_colors">Submit</span>
      </div>
    </div>
  );
};

export default CreateProjectForm;
