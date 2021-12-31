/*eslint-disable*/

import './User.role.menu.scss';

import React from 'react';

import {
  openEditForm,
  openAddForm,
} from '../../../../redux/User-Role/role.actions';

import { useDispatch, connect } from 'react-redux';

const UserRoleMenu = ({ userId, token }) => {
  const dispatch = useDispatch();

  const handelOpenForm = () => {
    const data = {
      userId: userId,
      token: token,
    };
    dispatch(openEditForm(data));
  };

  const handelAddFormOpen = () => {
    const data = {
      userId: userId,
      token: token,
    };
    dispatch(openAddForm(data));
  };

  return (
    <div className="user-role-menu-base">
      <p onClick={handelAddFormOpen}>Add/ View</p>
      <p onClick={handelOpenForm}>Edit</p>
      <p>Delete</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.user.userData.accessToken,
});

export default connect(mapStateToProps)(UserRoleMenu);
