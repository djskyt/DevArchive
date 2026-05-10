import { useBookmarkToggle } from '../../bookmark/model/useBookmarkToggle';
import { useAuthStore } from '../../../shared/store/auth.store';

export const ArticleCard = ({ article }) => {
  const user = useAuthStore((state) => state.user);
  const { isBookmarked, toggle, isPending } = useBookmarkToggle(article.id);

  return (
    <div>
      <img src={article.thumbnail} alt={article.title} />
      <div>
        <div>
          {article.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <div>
          <span>{article.author}</span>
          <span>{new Date(article.createdAt).toLocaleDateString('ko-KR')}</span>
        </div>
      </div>
      {user && (
        <button onClick={toggle} disabled={isPending}>
          {isBookmarked ? '★' : '☆'}
        </button>
      )}
    </div>
  );
};