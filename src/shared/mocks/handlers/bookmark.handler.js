import { http, HttpResponse } from 'msw';
import { db } from '../db';
import { nanoid } from 'nanoid';

export const bookmarkHandlers = [
  // 내 북마크 목록
  http.get('/api/bookmarks', ({ request }) => {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return HttpResponse.json({ message: 'userId is required' }, { status: 400 });
    }

    const bookmarks = db.bookmarks.findByUserId(userId);
    const articles = bookmarks.map((b) => ({
      ...b,
      article: db.articles.findById(b.articleId),
    }));

    return HttpResponse.json(articles);
  }),

  // 북마크 추가
  http.post('/api/bookmarks', async ({ request }) => {
    const { userId, articleId } = await request.json();

    const exists = db.bookmarks.findOne(userId, articleId);
    if (exists) {
      return HttpResponse.json({ message: 'Already bookmarked' }, { status: 409 });
    }

    const bookmark = {
      id: nanoid(),
      userId,
      articleId,
      createdAt: new Date().toISOString(),
    };

    db.bookmarks.add(bookmark);
    return HttpResponse.json(bookmark, { status: 201 });
  }),

  // 북마크 삭제
  http.delete('/api/bookmarks', async ({ request }) => {
    const { userId, articleId } = await request.json();

    const exists = db.bookmarks.findOne(userId, articleId);
    if (!exists) {
      return HttpResponse.json({ message: 'Bookmark not found' }, { status: 404 });
    }

    db.bookmarks.remove(userId, articleId);
    return new HttpResponse(null, { status: 204 });
  }),
];