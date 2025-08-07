import React, { lazy, Suspense } from 'react';

const Page1mjf58p = lazy(() => import('./Page'));

const LazyPage1mjf58p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjf58p />
  </Suspense>
);

export { LazyPage1mjf58p };
