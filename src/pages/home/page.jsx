import { useSearch } from '../../features/search/model/useSearch';
import { SearchBar } from '../../features/search/ui/SearchBar';
import { ArticleCard } from '../../features/article/ui/ArticleCard';

export const HomePage = () => {
  const { query, setQuery, tag, setTag, articles, isPending, isError } = useSearch();

  return (
    <div>
      <h1>Dev Archive</h1>
      <SearchBar onSearch={setQuery} />
      <div>
        {isPending && <p>로딩 중...</p>}
        {isError && <p>아티클을 불러올 수 없습니다.</p>}
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};