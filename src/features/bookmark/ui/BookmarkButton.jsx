import { useBookmarkToggle } from '../model/useBookmarkToggle';

export const BookmarkButton = ({ articleId }) => {
  const { isBookmarked, toggle, isPending } = useBookmarkToggle(articleId);

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      className="shrink-0 text-2xl text-zinc-400 hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors disabled:opacity-40"
    >
      {isBookmarked ? '★' : '☆'}
    </button>
  );
};