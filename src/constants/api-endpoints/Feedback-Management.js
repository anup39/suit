const FEEDBACK_MANAGEMENT = {
  createFeedback: `${process.env.REACT_APP_API_HOSTNAME}api/createFeedBack`,
  viewAllFeedback: `${process.env.REACT_APP_API_HOSTNAME}api/listFeedBack`,
  viewFeedbackById: `${process.env.REACT_APP_API_HOSTNAME}api/feedBackDetails`,
  deleteFeedbackById: `${process.env.REACT_APP_API_HOSTNAME}api/deleteFeedBack`,
  getAllFeedBackByUserID: `${process.env.REACT_APP_API_HOSTNAME}api/listFeedBackByUser`,
};

export default FEEDBACK_MANAGEMENT;
