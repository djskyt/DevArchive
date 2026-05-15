import { useAuthStore } from '../../shared/store/auth.store';
import { BookmarkList } from '../../features/bookmark/ui/BookmarkList';
import { Link } from 'react-router-dom';

export const BookmarksPage = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">로그인 후 북마크를 확인할 수 있어요.</p>
        <Link
          to="/login"
          className="text-sm px-4 py-2 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-80 transition-opacity"
        >
          로그인하기
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">북마크</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">저장한 아티클 목록이에요</p>
      </div>
      <BookmarkList />
    </div>
  );
};