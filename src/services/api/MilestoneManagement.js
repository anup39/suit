import MILESTONE_MANAGEMENT_API from '../../constants/api-endpoints/milestoneManagement';
import axiosInstance from '../../utils/axiosInstance';

export const GET_MILESTONE_LIST = async () => {
  const milestoneList = await axiosInstance(
    MILESTONE_MANAGEMENT_API.LIST_MILESTONE,
    {
      method: 'GET',
    }
  );
  return milestoneList.data;
};

export const UPDATE_MILESTONE = async (payload) => {
  const { milestoneId, date, desc, userId } = payload;

  const milestoneList = await axiosInstance(
    `${MILESTONE_MANAGEMENT_API.UPDATE_MILESTONE}/${milestoneId}`,
    {
      method: 'PUT',
      data: {
        approvalNote: desc,
        approvedBy: userId,
        approvalDate: date,
      },
    }
  );
  return milestoneList.data;
};

export const GET_MILESTONE_BY_ID = async (payload) => {
  const { id } = payload;

  const milestoneData = await axiosInstance(
    `${MILESTONE_MANAGEMENT_API.GET_MILESTONE_BY_ID}/${id}`
  );
  return milestoneData.data;
};

export const DELETE_MILESTONE = async (payload) => {
  const { id } = payload;

  const milestoneData = await axiosInstance(
    `${MILESTONE_MANAGEMENT_API.DELETE_MILESTONE_BY_ID}/${id}`,
    {
      method: 'DELETE',
    }
  );
  return milestoneData.data;
};
