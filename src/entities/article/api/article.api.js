import { axiosInstance } from '../../../shared/api/axios.instance';

export const articleApi = {
  getAll: ({ q, tags } = {}) =>
    axiosInstance.get('/articles', {
      params: { q, tags },
      paramsSerializer: (params) => {
        const searchParams = new URLSearchParams();
        if (params.q) searchParams.append('q', params.q);
        if (params.tags?.length) {
          params.tags.forEach((tag) => searchParams.append('tags', tag));
        }
        return searchParams.toString();
      },
    }),
  getById: (id) => axiosInstance.get(`/articles/${id}`),
};