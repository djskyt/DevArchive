import { axiosInstance } from '../../../shared/api/axios.instance';

export const articleApi = {
  getAll: (params) => axiosInstance.get('/articles', { params }),
  getById: (id) => axiosInstance.get(`/articles/${id}`),
};