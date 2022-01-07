/*eslint-disable*/
import './BaseTemplate.scss';

import React from 'react';

const BaseTemplate = (props) => {
  return (
    <>
    <div className="base-div">
      <div>
        <h2 className="header">{props.title}</h2>
      </div>
      {props.children}
    </div>
    <p className="footer">Powered By Negentis</p>

    </>
  );
};

export default BaseTemplate;
