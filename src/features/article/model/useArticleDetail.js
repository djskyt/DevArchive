import { useQuery } from '@tanstack/react-query';
import { articleApi } from '../../../entities/article/api/article.api';
import { queryKeys } from '../../../shared/api/queryKeys';

export const useArticleDetail = (id) => {
  return useQuery({
    queryKey: queryKeys.articles.detail(id),
    queryFn: () => articleApi.getById(id),
    enabled: !!id,
  });
};