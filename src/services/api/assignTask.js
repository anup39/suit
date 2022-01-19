import axios from 'axios';

import ASSING_WORKLIST from '../../constants/api-endpoints/assignWorkList';
import { REFERSH_TOKEN } from '../api';

export const ASSGN_TASK = async (data) => {
  const { authToken, taskIdList, companyId } = data;

  const newToken = await REFERSH_TOKEN(authToken);

  const assignTaskResponse = await axios.post(ASSING_WORKLIST.assingTask, {
    method: 'PUT',
    data: {
      taskId: taskIdList,
      companyId,
    },
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return assignTaskResponse.data;
};

export const tets = () => {};
