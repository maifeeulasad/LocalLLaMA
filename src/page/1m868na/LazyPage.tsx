import React, { lazy, Suspense } from 'react';

const Page1m868na = lazy(() => import('./Page'));

const LazyPage1m868na = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m868na />
  </Suspense>
);

export { LazyPage1m868na };
