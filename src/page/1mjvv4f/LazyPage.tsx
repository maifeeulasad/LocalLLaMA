import React, { lazy, Suspense } from 'react';

const Page1mjvv4f = lazy(() => import('./Page'));

const LazyPage1mjvv4f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjvv4f />
  </Suspense>
);

export { LazyPage1mjvv4f };
