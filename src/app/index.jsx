import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryProvider } from './providers/query-client';
import { RouterProvider_ } from './providers/router';
import { seedDatabase } from '../shared/mocks/data/initialData';
import { worker } from '../shared/mocks/browser';

const enableMocking = async () => {
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
};

seedDatabase();

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <QueryProvider>
        <RouterProvider_ />
      </QueryProvider>
    </StrictMode>
  );
});