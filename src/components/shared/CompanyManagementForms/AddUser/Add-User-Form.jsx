/*eslint-disable */
import React from 'react';
import FormModal from '../../FormModal/FormModal';
import UserCard from '../UserCard/User-Card';
import './add.user.scss';
import FormButton from '../../FormComponents/Buttons/FormButton.styles';
import NameBadge from '../NameBadge/NameBadge';

const AddUserForm = () => {
  return (
    <FormModal>
      <div>
        <div className="form-div">
          <p className="form-header">Add User</p>
          <div>
            <p>Search</p>
            <div className="search-user-div">
              <NameBadge name="maheshchoudhury332@gmail.com" />
              <NameBadge name="User1@com.example.com" />
              <NameBadge name="User3@gome.c" />
              <input className="search-user-input" />
            </div>
          </div>
          <div className="select-users">
            <UserCard tableHeader={true} />
            <UserCard user="a@user.com" role="Marketing" />
            <UserCard user="a@user.com" role="Marketing" />
            <UserCard user="a@user.com" role="Marketing" />
            <UserCard user="a@user.com" role="Marketing" />
            <UserCard user="user@gmail.com" role="Engineering" />
            <UserCard user="a@gmail.com" role="Engineering" />
          </div>
        </div>
      </div>
    </FormModal>
  );
};

export default AddUserForm;
