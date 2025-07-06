import React, { lazy, Suspense } from 'react';

const Page1lstg8c = lazy(() => import('./Page'));

const LazyPage1lstg8c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lstg8c />
  </Suspense>
);

export { LazyPage1lstg8c };
