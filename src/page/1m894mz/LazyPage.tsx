import React, { lazy, Suspense } from 'react';

const Page1m894mz = lazy(() => import('./Page'));

const LazyPage1m894mz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m894mz />
  </Suspense>
);

export { LazyPage1m894mz };
