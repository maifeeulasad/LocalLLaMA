import React, { lazy, Suspense } from 'react';

const Page1ls8c2s = lazy(() => import('./Page'));

const LazyPage1ls8c2s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls8c2s />
  </Suspense>
);

export { LazyPage1ls8c2s };
