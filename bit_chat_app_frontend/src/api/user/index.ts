import axios from 'axios';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';

import * as env from '../../consts/env.json';
import { currentAuthenticatedUser } from '../../hooks/auth/useAuth';
import User from '../../models/user';

const fetcher = async (url: string, token: string) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const useGetUsers = async () => {
  const { token } = useRecoilValue(currentAuthenticatedUser);
  const url = `${env.APIGatewayURL}/users`;
  return useSWR<User[]>([url, token], fetcher, {});
};
