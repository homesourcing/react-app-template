import axios from 'axios';
import {QueryClient} from '@tanstack/react-query';

export const axiosInstance = axios.create();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
