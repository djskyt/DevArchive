import { useArticles } from '../../../features/article/model/useArticles';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { useState } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('');
  const debouncedQuery = useDebounce(query);

  const { data: articles = [], isPending, isError } = useArticles({
    q: debouncedQuery,
    tag,
  });

  return { query, setQuery, tag, setTag, articles, isPending, isError };
};