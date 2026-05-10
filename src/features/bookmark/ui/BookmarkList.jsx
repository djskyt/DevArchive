import { useBookmarks } from '../model/useBookmarks';
import { ArticleCard } from '../../article/ui/ArticleCard';

export const BookmarkList = () => {
  const { data: bookmarks = [], isPending, isError } = useBookmarks();

  if (isPending) return <p>로딩 중...</p>;
  if (isError) return <p>북마크를 불러올 수 없습니다.</p>;
  if (bookmarks.length === 0) return <p>북마크한 아티클이 없습니다.</p>;

  return (
    <div>
      {bookmarks.map((bookmark) => (
        <ArticleCard key={bookmark.id} article={bookmark.article} />
      ))}
    </div>
  );
};