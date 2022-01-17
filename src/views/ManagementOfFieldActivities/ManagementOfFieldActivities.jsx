import './ManagementOfFieldActivities.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import FieldUpdates from '../../components/shared/FieldUpdates/FieldUpdates';
import { getIfAuthenticated } from '../../redux/user-redux/user.selectors';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

const ManagementOfFieldActivities = () => {
  const isAuthenticated = useSelector(getIfAuthenticated);
  return (
    <AuthenticatedRoute isAuthenticated={isAuthenticated}>
      <BaseTemplate title="Management Of Field Activities">
        <div className="assignment-of-field-activities">
          <FieldUpdates />
        </div>
      </BaseTemplate>
    </AuthenticatedRoute>
  );
};

export default ManagementOfFieldActivities;
