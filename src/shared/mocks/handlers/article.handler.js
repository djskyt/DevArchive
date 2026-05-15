import { http, HttpResponse } from 'msw';
import { db } from '../db';

export const articleHandlers = [
  http.get('/api/articles', ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q')?.toLowerCase() ?? '';
    const tags = url.searchParams.getAll('tags');

    let articles = db.articles.findAll();

    if (q) {
      articles = articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      );
    }

    if (tags.length > 0) {
      articles = articles.filter((a) =>
        tags.every((tag) => a.tags.includes(tag))
      );
    }

    return HttpResponse.json(articles);
  }),

  http.get('/api/articles/:id', ({ params }) => {
    const article = db.articles.findById(params.id);

    if (!article) {
      return HttpResponse.json({ message: 'Article not found' }, { status: 404 });
    }

    return HttpResponse.json(article);
  }),
];