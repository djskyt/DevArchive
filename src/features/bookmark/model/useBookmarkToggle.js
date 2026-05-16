import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookmarkApi } from '../../../entities/bookmark/api/bookmark.api';
import { queryKeys } from '../../../shared/api/queryKeys';
import { useAuthStore } from '../../../shared/store/auth.store';
import { useBookmarks } from './useBookmarks';

export const useBookmarkToggle = (articleId) => {
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();
  const { data: bookmarks = [] } = useBookmarks();

  const isBookmarked = bookmarks.some((b) => b.articleId === articleId);

  const { mutate: toggle, isPending } = useMutation({
    mutationFn: () =>
      isBookmarked
        ? bookmarkApi.remove(user.id, articleId)
        : bookmarkApi.add(user.id, articleId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.bookmarks.list(user?.id),
      });
    },
  });

  return { isBookmarked, toggle, isPending };
};