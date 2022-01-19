import axios from 'axios';

import ASSING_WORKLIST from '../../constants/api-endpoints/assignWorkList';
import { REFERSH_TOKEN } from '../api';

export const ASSGN_TASK = async (data) => {
  const { authToken, taskIdList, companyId } = data;

  const newToken = await REFERSH_TOKEN(authToken);

  const assignTaskResponse = await axios(ASSING_WORKLIST.assingTask, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
    data: {
      taskId: taskIdList,
      companyId,
    },
  });
  return assignTaskResponse.data;
};

export const tets = () => {};
