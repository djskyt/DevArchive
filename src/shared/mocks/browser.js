import { setupWorker } from 'msw/browser';
import { articleHandlers } from './handlers/article.handler';
import { bookmarkHandlers } from './handlers/bookmark.handler';
import { authHandlers } from './handlers/auth.handler';

export const worker = setupWorker(
  ...articleHandlers,
  ...bookmarkHandlers,
  ...authHandlers,
);