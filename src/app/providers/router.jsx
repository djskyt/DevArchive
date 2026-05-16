import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Layout } from '../../shared/ui/Layout';
import { ProtectedRoute } from '../../shared/ui/ProtectedRoute';
import { HomePage } from '../../pages/home/page';
import { BookmarksPage } from '../../pages/bookmarks/page';
import { ArticlePage } from '../../pages/article/page';
import { LoginPage } from '../../pages/login/page';


const router = createBrowserRouter([
  {
    element: <Layout><Outlet /></Layout>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/bookmarks',
        element: (
          <ProtectedRoute>
            <BookmarksPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/articles/:id',
        element: <ArticlePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export const RouterProvider_ = () => <RouterProvider router={router} />;