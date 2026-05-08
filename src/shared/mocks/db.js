const KEYS = {
  articles: 'dev-archive:articles',
  bookmarks: 'dev-archive:bookmarks',
  users: 'dev-archive:users',
  currentUser: 'dev-archive:currentUser',
};

const read = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

const write = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const db = {
  articles: {
    findAll: () => read(KEYS.articles) ?? [],
    findById: (id) => read(KEYS.articles)?.find((a) => a.id === id) ?? null,
    findMany: (predicate) => read(KEYS.articles)?.filter(predicate) ?? [],
  },

  bookmarks: {
    findAll: () => read(KEYS.bookmarks) ?? [],
    findByUserId: (userId) =>
      read(KEYS.bookmarks)?.filter((b) => b.userId === userId) ?? [],
    findOne: (userId, articleId) =>
      read(KEYS.bookmarks)?.find(
        (b) => b.userId === userId && b.articleId === articleId
      ) ?? null,
    add: (bookmark) => {
      const prev = read(KEYS.bookmarks) ?? [];
      write(KEYS.bookmarks, [...prev, bookmark]);
    },
    remove: (userId, articleId) => {
      const prev = read(KEYS.bookmarks) ?? [];
      write(
        KEYS.bookmarks,
        prev.filter((b) => !(b.userId === userId && b.articleId === articleId))
      );
    },
  },

  users: {
    findByEmail: (email) =>
      read(KEYS.users)?.find((u) => u.email === email) ?? null,
    add: (user) => {
      const prev = read(KEYS.users) ?? [];
      write(KEYS.users, [...prev, user]);
    },
  },

  currentUser: {
    get: () => read(KEYS.currentUser),
    set: (user) => write(KEYS.currentUser, user),
    clear: () => localStorage.removeItem(KEYS.currentUser),
  },

  __seed: (key, data) => {
    if (!localStorage.getItem(key)) {
      write(key, data);
    }
  },

  __keys: KEYS,
};