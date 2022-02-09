import FEEDBACK_MANAGEMENT from '../../constants/api-endpoints/Feedback-Management';
import axiosInstance from '../../utils/axiosInstance';

export const ADD_NEW_FEEDBACK = async (data) => {
  const { feedBackDetails } = data;

  const feebdackData = await axiosInstance(FEEDBACK_MANAGEMENT.createFeedback, {
    method: 'POST',
    data: feedBackDetails,
  });
  return feebdackData.data;
};

export const DELETE_FEEDBACK = async (data) => {
  const { feedbackId } = data;

  const feebdackData = await axiosInstance(
    `${FEEDBACK_MANAGEMENT.deleteFeedbackById}/${feedbackId}`,
    {
      method: 'DELETE',
    }
  );
  return feebdackData.data;
};

export const GET_ALL_FEEDBACK = async () => {
  const feebdackData = await axiosInstance(
    FEEDBACK_MANAGEMENT.viewAllFeedback,
    {
      method: 'GET',
    }
  );
  return feebdackData.data;
};

export const GET_FEEDBACK_BY_USER_ID = async (data) => {
  const { userId } = data;

  const url = `${FEEDBACK_MANAGEMENT.getAllFeedBackByUserID}/${userId}`;

  const feebdackData = await axiosInstance(url, {
    method: 'GET',
  });
  return feebdackData.data;
};
