import { http, HttpResponse } from 'msw';
import { db } from '../db';
import { nanoid } from 'nanoid';

export const authHandlers = [
  // 로그인
  http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json();

    const user = db.users.findByEmail(email);

    if (!user || user.password !== password) {
      return HttpResponse.json(
        { message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    const { password: _, ...safeUser } = user;

    db.currentUser.set({ ...safeUser, token: nanoid() });

    return HttpResponse.json({ user: safeUser, token: nanoid() });
  }),

  // 로그아웃
  http.post('/api/auth/logout', () => {
    db.currentUser.clear();
    return new HttpResponse(null, { status: 204 });
  }),

  // 내 정보
  http.get('/api/auth/me', () => {
    const currentUser = db.currentUser.get();

    if (!currentUser) {
      return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    return HttpResponse.json(currentUser);
  }),
];