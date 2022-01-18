import axios from 'axios';

import FEEDBACK_MANAGEMENT from '../../constants/api-endpoints/Feedback-Management';

export const ADD_NEW_FEEDBACK = async (data) => {
  console.log(data);
  const { authToken, feedBackDetails } = data;

  const feebdackData = await axios(FEEDBACK_MANAGEMENT.createFeedback, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },

    data: feedBackDetails,
  });
  return feebdackData.data;
};

export const DELETE_FEEDBACK = async (data) => {
  const { authToken, feedbackId } = data;

  const feebdackData = await axios(
    `${FEEDBACK_MANAGEMENT.deleteFeedbackById}/${feedbackId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return feebdackData.data;
};

export const GET_ALL_FEEDBACK = async (data) => {
  const feebdackData = await axios(FEEDBACK_MANAGEMENT.viewAllFeedback, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${data}`,
    },
  });
  return feebdackData.data;
};

export const GET_FEEDBACK_BY_ID = async (data) => {
  const { authToken, feedbackId } = data;

  const feebdackData = await axios(
    `${FEEDBACK_MANAGEMENT.viewFeedbackById}/${feedbackId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return feebdackData.data;
};
