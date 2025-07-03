import React, { lazy, Suspense } from 'react';

const Page1lqphqd = lazy(() => import('./Page'));

const LazyPage1lqphqd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqphqd />
  </Suspense>
);

export { LazyPage1lqphqd };
