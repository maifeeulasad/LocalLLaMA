import React, { lazy, Suspense } from 'react';

const Page1lx5jc1 = lazy(() => import('./Page'));

const LazyPage1lx5jc1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx5jc1 />
  </Suspense>
);

export { LazyPage1lx5jc1 };
