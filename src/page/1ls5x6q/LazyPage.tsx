import React, { lazy, Suspense } from 'react';

const Page1ls5x6q = lazy(() => import('./Page'));

const LazyPage1ls5x6q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls5x6q />
  </Suspense>
);

export { LazyPage1ls5x6q };
