import { axiosInstance } from '../../../shared/api/axios.instance';

export const bookmarkApi = {
  getByUserId: (userId) => axiosInstance.get('/bookmarks', { params: { userId } }),
  add: (userId, articleId) => axiosInstance.post('/bookmarks', { userId, articleId }),
  remove: (userId, articleId) => axiosInstance.delete('/bookmarks', { data: { userId, articleId } }),
};