import {axiosInstance} from '../config';

import {Users} from '../../enums/urls/Users';

import {GetUsersParams, UserApiResponse} from '../../types/users/User';

export const getUsers = async (params: GetUsersParams) => {
  const {data} = await axiosInstance.get<UserApiResponse>(Users.GET_USERS, {
    params,
  });

  return data;
};
