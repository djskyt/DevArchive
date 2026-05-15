import { useBookmarks } from '../model/useBookmarks';
import { ArticleCard } from '../../article/ui/ArticleCard';

export const BookmarkList = () => {
  const { data: bookmarks = [], isPending, isError } = useBookmarks();

  if (isPending) return <p className="text-sm text-zinc-400 text-center py-10">로딩 중...</p>;
  if (isError) return <p className="text-sm text-red-400 text-center py-10">북마크를 불러올 수 없습니다.</p>;
  if (bookmarks.length === 0) return (
    <p className="text-sm text-zinc-400 text-center py-10">북마크한 아티클이 없어요.</p>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bookmarks.map((bookmark) => (
        <ArticleCard key={bookmark.id} article={bookmark.article} />
      ))}
    </div>
  );
};