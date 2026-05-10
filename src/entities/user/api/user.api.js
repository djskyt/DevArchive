import { axiosInstance } from '../../../shared/api/axios.instance';

export const userApi = {
  me: () => axiosInstance.get('/auth/me'),
  login: (email, password) => axiosInstance.post('/auth/login', { email, password }),
  logout: () => axiosInstance.post('/auth/logout'),
};