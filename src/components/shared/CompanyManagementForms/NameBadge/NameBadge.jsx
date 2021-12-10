/*eslint-disable */
import React from 'react';
import './NameBadge.scss';
const NameBadge = ({ name = '' }) => {
  if (name.length >= 30) {
    name = name.slice(0, 30) + '...';
  }
  return (
    <div className="badge-base">
      <span>{name}</span>
      <span className="cross-icon"> X</span>
    </div>
  );
};

export default NameBadge;
