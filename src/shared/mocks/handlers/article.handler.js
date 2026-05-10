import { http, HttpResponse } from 'msw';
import { db } from '../db';

export const articleHandlers = [
  // 전체 목록 + 검색
  http.get('/api/articles', ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q')?.toLowerCase() ?? '';
    const tag = url.searchParams.get('tag') ?? '';

    let articles = db.articles.findAll();

    if (q) {
      articles = articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      );
    }

    if (tag) {
      articles = articles.filter((a) => a.tags.includes(tag));
    }

    return HttpResponse.json(articles);
  }),

  // 단건 조회
  http.get('/api/articles/:id', ({ params }) => {
    const article = db.articles.findById(params.id);

    if (!article) {
      return HttpResponse.json({ message: 'Article not found' }, { status: 404 });
    }

    return HttpResponse.json(article);
  }),
];