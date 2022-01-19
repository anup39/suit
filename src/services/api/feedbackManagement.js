import axios from 'axios';

import FEEDBACK_MANAGEMENT from '../../constants/api-endpoints/Feedback-Management';
import { REFERSH_TOKEN } from '../api';

export const ADD_NEW_FEEDBACK = async (data) => {
  const { authToken, feedBackDetails } = data;

  const newToken = await REFERSH_TOKEN(authToken);

  const feebdackData = await axios(FEEDBACK_MANAGEMENT.createFeedback, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },

    data: feedBackDetails,
  });
  return feebdackData.data;
};

export const DELETE_FEEDBACK = async (data) => {
  const { authToken, feedbackId } = data;
  const newToken = await REFERSH_TOKEN(authToken);

  const feebdackData = await axios(
    `${FEEDBACK_MANAGEMENT.deleteFeedbackById}/${feedbackId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return feebdackData.data;
};

export const GET_ALL_FEEDBACK = async (data) => {
  const newToken = await REFERSH_TOKEN(data);

  const feebdackData = await axios(FEEDBACK_MANAGEMENT.viewAllFeedback, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return feebdackData.data;
};

export const GET_FEEDBACK_BY_USER_ID = async (data) => {
  const { authToken, userId } = data;
  const newToken = await REFERSH_TOKEN(authToken);

  const url = `${FEEDBACK_MANAGEMENT.getAllFeedBackByUserID}/${userId}`;
  console.log(url);

  const feebdackData = await axios(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return feebdackData.data;
};
