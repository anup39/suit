import './BaseTemplate.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

const BaseTemplate = ({ children, title }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="base-div">
        {title ? <h2 className="header">{t(title)}</h2> : ''}
        {children}
      </div>
      <p className="footer">{t('poweredBy')} Negentis</p>
    </>
  );
};

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default BaseTemplate;
