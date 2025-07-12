import React, { lazy, Suspense } from 'react';

const Page1lx5p9b = lazy(() => import('./Page'));

const LazyPage1lx5p9b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx5p9b />
  </Suspense>
);

export { LazyPage1lx5p9b };
