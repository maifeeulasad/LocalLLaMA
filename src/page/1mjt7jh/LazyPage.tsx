import React, { lazy, Suspense } from 'react';

const Page1mjt7jh = lazy(() => import('./Page'));

const LazyPage1mjt7jh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjt7jh />
  </Suspense>
);

export { LazyPage1mjt7jh };
