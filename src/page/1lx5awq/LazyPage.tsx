import React, { lazy, Suspense } from 'react';

const Page1lx5awq = lazy(() => import('./Page'));

const LazyPage1lx5awq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx5awq />
  </Suspense>
);

export { LazyPage1lx5awq };
