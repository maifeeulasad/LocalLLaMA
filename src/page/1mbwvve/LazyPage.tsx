import React, { lazy, Suspense } from 'react';

const Page1mbwvve = lazy(() => import('./Page'));

const LazyPage1mbwvve = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbwvve />
  </Suspense>
);

export { LazyPage1mbwvve };
