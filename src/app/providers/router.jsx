import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../../pages/home/page';
import { BookmarksPage } from '../../pages/bookmarks/page';
import { ArticlePage } from '../../pages/article/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/bookmarks',
    element: <BookmarksPage />,
  },
  {
    path: '/articles/:id',
    element: <ArticlePage />,
  },
]);

export const RouterProvider_ = () => <RouterProvider router={router} />;