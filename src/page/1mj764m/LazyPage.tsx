import React, { lazy, Suspense } from 'react';

const Page1mj764m = lazy(() => import('./Page'));

const LazyPage1mj764m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj764m />
  </Suspense>
);

export { LazyPage1mj764m };
