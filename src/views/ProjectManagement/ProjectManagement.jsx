import React from 'react';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DataGridBase from '../../components/shared/DatagridBase/DatagridBase';
import SearchComponent from '../../components/shared/SearchComponent/SearchComponent';

const ProjectManagement = () => {
  return (
    <BaseTemplate title="Project Management">
      <DataGridBase>
        <SearchComponent title="Search Project" />
      </DataGridBase>
    </BaseTemplate>
  );
};

export default ProjectManagement;
