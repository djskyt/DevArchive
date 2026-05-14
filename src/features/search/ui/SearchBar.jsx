import { useSearch } from '../model/useSearch';

export const SearchBar = ({ onSearch }) => {
  const { query, setQuery } = useSearch();

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="아티클 검색..."
    />
  );
};