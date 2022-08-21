import {useQuery} from '@tanstack/react-query';

import {getUsers} from '../services/userService';

import {GetUsersParams} from '../../types/users/User';

export const useGetUsers = (params: GetUsersParams) => {
  return useQuery(['getUsers', params], () => getUsers(params));
};
