import SpaceWidget from '@webex/widget-space';
import PropTypes from 'prop-types';
import React from 'react';

const SpaceWidgetComponent = ({
  accessToken,
  destinationType,
  destinationId,
}) => {
  const spaceWidgetProps = {
    // eslint-disable-next-line object-shorthand
    accessToken: accessToken,
    // eslint-disable-next-line object-shorthand
    destinationType: destinationType,
    // eslint-disable-next-line object-shorthand
    destinationId: destinationId,
    activities: {
      files: true,
      meet: true,
      message: true,
      people: true,
    },
    initialActivity: 'message',
  };

  console.log(spaceWidgetProps);
  return <SpaceWidget {...spaceWidgetProps} />;
};

SpaceWidgetComponent.propTypes = {
  accessToken: PropTypes.string.isRequired,
  destinationType: PropTypes.string.isRequired,
  destinationId: PropTypes.string.isRequired,
};

export default SpaceWidgetComponent;
