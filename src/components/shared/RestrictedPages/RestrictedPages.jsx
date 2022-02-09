import './RestrictedPages.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrentUserRole } from '../../../redux/user-redux/user.selectors';

const RestrictedPages = ({ children, accessibleBy = [] }) => {
  const currentUserRole = useSelector(getCurrentUserRole);

  return (
    <div>
      {accessibleBy.includes(currentUserRole) ? (
        children
      ) : (
        <div className="not-authorized">
          {' '}
          You Are Not Authorized To View the Page!{' '}
        </div>
      )}
    </div>
  );
};

RestrictedPages.propTypes = {
  accessibleBy: PropTypes.isRequired,
  children: PropTypes.node.isRequired,
};

export default RestrictedPages;
