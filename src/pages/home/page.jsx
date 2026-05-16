import { useSearch } from '../../features/search/model/useSearch';
import { ArticleCard } from '../../features/article/ui/ArticleCard';
import { ARTICLE_TAGS } from '../../shared/utils/constants';

export const HomePage = () => {
  const { query, setQuery, tags, toggleTag, clearTags, articles, isPending, isError } = useSearch();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">아티클</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          개발 아티클을 저장하고 관리하세요
        </p>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="아티클 검색..."
        className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={clearTags}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            tags.length === 0
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent'
              : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500'
          }`}
        >
          전체
        </button>
        {ARTICLE_TAGS.map((t) => (
          <button
            key={t}
            onClick={() => toggleTag(t)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              tags.includes(t)
                ? 'bg-indigo-500 text-white border-transparent'
                : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {isPending && (
        <p className="text-sm text-zinc-400 text-center py-10">로딩 중...</p>
      )}
      {isError && (
        <p className="text-sm text-red-400 text-center py-10">
          아티클을 불러올 수 없습니다.
        </p>
      )}
      {!isPending && !isError && articles.length === 0 && (
        <p className="text-sm text-zinc-400 text-center py-10">
          검색 결과가 없습니다.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};