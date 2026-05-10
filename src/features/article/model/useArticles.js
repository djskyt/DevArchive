import { useQuery } from '@tanstack/react-query';
import { articleApi } from '../../../entities/article/api/article.api';
import { queryKeys } from '../../../shared/api/queryKeys';

export const useArticles = (params) => {
  return useQuery({
    queryKey: queryKeys.articles.list(params),
    queryFn: () => articleApi.getAll(params),
  });
};