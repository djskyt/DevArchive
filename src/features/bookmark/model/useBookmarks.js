import { useQuery } from '@tanstack/react-query';
import { bookmarkApi } from '../../../entities/bookmark/api/bookmark.api';
import { queryKeys } from '../../../shared/api/queryKeys';
import { useAuthStore } from '../../../shared/store/auth.store';

export const useBookmarks = () => {
  const user = useAuthStore((state) => state.user);

  return useQuery({
    queryKey: queryKeys.bookmarks.list(user?.id),
    queryFn: () => bookmarkApi.getByUserId(user.id),
    enabled: !!user,
  });
};