import { db } from '../db';

const articles = [
  {
    id: 'article-1',
    title: 'React 18의 Concurrent Features 완전 정복',
    description: 'useTransition, Suspense, startTransition까지 실전 예제로 파헤칩니다.',
    url: 'https://dev.to/myogeshchavan97/react-18-a-complete-guide-to-every-new-feature-54e5',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    tags: ['React', 'JavaScript', 'Frontend'],
    author: 'John Doe',
    createdAt: '2024-10-01T09:00:00Z',
  },
  {
    id: 'article-2',
    title: 'TanStack Query v5 마이그레이션 가이드',
    description: 'v4에서 v5로 넘어갈 때 꼭 알아야 할 breaking change 정리.',
    url: 'https://dev.to/tsudhishnair/migrating-to-tanstack-query-v5-17e1',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    tags: ['TanStack Query', 'React', 'Frontend'],
    author: 'Jane Smith',
    createdAt: '2024-10-05T10:00:00Z',
  },
  {
    id: 'article-3',
    title: 'FSD 아키텍처 실전 적용기',
    description: 'Feature-Sliced Design을 실제 프로젝트에 도입하면서 겪은 것들.',
    url: 'https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj',
    thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop',
    tags: ['Architecture', 'Frontend'],
    author: 'Dev Archive',
    createdAt: '2024-10-10T08:00:00Z',
  },
  {
    id: 'article-4',
    title: 'Zustand로 전역 상태 심플하게 관리하기',
    description: 'Redux 없이도 충분한 Zustand 패턴 가이드.',
    url: 'https://dev.to/recraftedcodes/zustand-the-react-state-manager-you-actually-want-to-use-3d1p',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    tags: ['Zustand', 'React', 'State Management'],
    author: 'Alice Kim',
    createdAt: '2024-10-15T11:00:00Z',
  },
  {
    id: 'article-5',
    title: 'MSW 2.0으로 API 목킹 제대로 하기',
    description: 'Service Worker 기반 목킹의 동작 원리부터 실전 세팅까지.',
    url: 'https://dev.to/kettanaito/msw-2-0-is-finally-here-1ofl',
    thumbnail: 'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=800&h=400&fit=crop',
    tags: ['MSW', 'Testing', 'Frontend'],
    author: 'Bob Lee',
    createdAt: '2024-10-20T13:00:00Z',
  },
];

const users = [
  {
    id: 'user-1',
    email: 'dev@archive.com',
    password: 'password123',
    name: '개발자',
  },
];

const bookmarks = [
  {
    id: 'bookmark-1',
    userId: 'user-1',
    articleId: 'article-1',
    createdAt: '2024-10-02T09:00:00Z',
  },
];

export const seedDatabase = () => {
  db.__seed(db.__keys.articles, articles);
  db.__seed(db.__keys.users, users);
  db.__seed(db.__keys.bookmarks, bookmarks);
};