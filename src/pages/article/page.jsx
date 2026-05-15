import { useParams, useNavigate } from 'react-router-dom';
import { useArticleDetail } from '../../features/article/model/useArticleDetail';
import { useAuthStore } from '../../shared/store/auth.store';
import { BookmarkButton } from '../../features/bookmark/ui/BookmarkButton';

export const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const { data: article, isPending, isError } = useArticleDetail(id);

  if (isPending) {
    return (
      <p className="text-sm text-zinc-400 text-center py-10">
        로딩 중...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-sm text-red-400 text-center py-10">
        아티클을 불러올 수 없습니다.
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">

      <button
        onClick={() => navigate(-1)}
        className="self-start text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
      >
        ← 뒤로가기
      </button>

      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full h-56 object-cover rounded-xl"
      />

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

      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
          {article.title}
        </h1>
        {user && <BookmarkButton articleId={article.id} />}
      </div>

      <div className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
        <span>{article.author}</span>
        <span>·</span>
        <span>
          {new Date(article.createdAt).toLocaleDateString('ko-KR')}
        </span>
      </div>

      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
        {article.description}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="self-start text-sm px-4 py-2 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-80 transition-opacity"
      >
        원문 보기 →
      </a>

    </div>
  );
};