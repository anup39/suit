import ASSING_WORKLIST from '../../constants/api-endpoints/assignWorkList';
import axiosInstance from '../../utils/axiosInstance';

export const ASSGN_TASK = async (data) => {
  const { taskIdList, companyId } = data;

  const assignTaskResponse = await axiosInstance(ASSING_WORKLIST.assingTask, {
    method: 'POST',
    data: {
      taskId: taskIdList,
      companyId,
    },
  });
  return assignTaskResponse.data;
};

export const tets = () => {};
