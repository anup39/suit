/*eslint-disable */
import React from 'react';
import FormModal from '../../FormModal/FormModal';
import UserCard from '../UserCard/User-Card';
import './add.user.scss';
import FormButton from '../../FormComponents/Buttons/FormButton.styles';
const AddUserForm = () => {
  return (
    <FormModal>
      <div>
        <div className="form-div">
          <p className="form-header">Add User</p>
          <div>
            <p>Search</p>
            <div className="search-user-div"></div>
          </div>
          <div className="search-user-div">
            <UserCard tableHeader={true} />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="a@mahesh.com" role="Marketing" />
            <UserCard user="maheshchoudhury@gmail.com" role="Engineering" />
            <UserCard user="a@gmail.com" role="Engineering" />
          </div>
        </div>
      </div>
    </FormModal>
  );
};

export default AddUserForm;
