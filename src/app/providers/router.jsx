import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../../shared/ui/Layout';
import { HomePage } from '../../pages/home/page';
import { BookmarksPage } from '../../pages/bookmarks/page';
import { ArticlePage } from '../../pages/article/page';
import { LoginPage } from '../../pages/login/page';
import { ProtectedRoute } from '../../shared/ui/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <Layout><HomePage /></Layout>,
    path: '/',
  },
  {
    path: '/bookmarks',
    element: (
      <Layout>
        <ProtectedRoute>
          <BookmarksPage />
        </ProtectedRoute>
      </Layout>
    ),
  },
  {
    element: <Layout><ArticlePage /></Layout>,
    path: '/articles/:id',
  },
  {
    path: '/login',
    element: <Layout><LoginPage /></Layout>,
  },
]);

export const RouterProvider_ = () => <RouterProvider router={router} />;