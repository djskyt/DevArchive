import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../shared/store/auth.store';
import { useBookmarkToggle } from '../../bookmark/model/useBookmarkToggle';

export const ArticleCard = ({ article }) => {
  const user = useAuthStore((state) => state.user);
  const { isBookmarked, toggle, isPending } = useBookmarkToggle(article.id);

  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 hover:shadow-md">
      <Link to={`/articles/${article.id}`}>
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-44 object-cover"
        />
      </Link>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link to={`/articles/${article.id}`}>
          <h2 className="font-semibold text-base text-zinc-900 dark:text-white leading-snug group-hover:text-indigo-500 transition-colors line-clamp-2">
            {article.title}
          </h2>
        </Link>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
            <span>{article.author}</span>
            <span>·</span>
            <span>{new Date(article.createdAt).toLocaleDateString('ko-KR')}</span>
          </div>

          {user && (
            <button
              onClick={toggle}
              disabled={isPending}
              className="text-lg text-zinc-400 hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors disabled:opacity-40"
            >
              {isBookmarked ? '★' : '☆'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};