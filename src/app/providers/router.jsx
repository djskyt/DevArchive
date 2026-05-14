import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../../shared/ui/Layout';
import { HomePage } from '../../pages/home/page';
import { BookmarksPage } from '../../pages/bookmarks/page';
import { ArticlePage } from '../../pages/article/page';

const router = createBrowserRouter([
  {
    element: <Layout><HomePage /></Layout>,
    path: '/',
  },
  {
    element: <Layout><BookmarksPage /></Layout>,
    path: '/bookmarks',
  },
  {
    element: <Layout><ArticlePage /></Layout>,
    path: '/articles/:id',
  },
]);

export const RouterProvider_ = () => <RouterProvider router={router} />;