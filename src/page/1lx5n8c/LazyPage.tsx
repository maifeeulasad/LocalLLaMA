import React, { lazy, Suspense } from 'react';

const Page1lx5n8c = lazy(() => import('./Page'));

const LazyPage1lx5n8c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx5n8c />
  </Suspense>
);

export { LazyPage1lx5n8c };
