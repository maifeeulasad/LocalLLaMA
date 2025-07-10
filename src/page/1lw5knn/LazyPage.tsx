import React, { lazy, Suspense } from 'react';

const Page1lw5knn = lazy(() => import('./Page'));

const LazyPage1lw5knn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw5knn />
  </Suspense>
);

export { LazyPage1lw5knn };
