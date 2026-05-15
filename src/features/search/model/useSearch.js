import { useState } from 'react';
import { useArticles } from '../../../features/article/model/useArticles';
import { useDebounce } from '../../../shared/hooks/useDebounce';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState([]);
  const debouncedQuery = useDebounce(query);

  const toggleTag = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearTags = () => setTags([]);

  const { data: articles = [], isPending, isError } = useArticles({
    q: debouncedQuery,
    tags,
  });

  return { query, setQuery, tags, toggleTag, clearTags, articles, isPending, isError };
};