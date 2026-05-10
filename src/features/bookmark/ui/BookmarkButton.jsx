import { useBookmarkToggle } from '../model/useBookmarkToggle';

export const BookmarkButton = ({ articleId }) => {
  const { isBookmarked, toggle, isPending } = useBookmarkToggle(articleId);

  return (
    <button onClick={toggle} disabled={isPending}>
      {isBookmarked ? '★' : '☆'}
    </button>
  );
};