export const queryKeys = {
  articles: {
    all: () => ['articles'],
    list: (params) => ['articles', 'list', params],
    detail: (id) => ['articles', 'detail', id],
  },
  bookmarks: {
    all: () => ['bookmarks'],
    list: (userId) => ['bookmarks', 'list', userId],
  },
  auth: {
    me: () => ['auth', 'me'],
  },
};