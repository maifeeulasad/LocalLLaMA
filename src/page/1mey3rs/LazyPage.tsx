import React, { lazy, Suspense } from 'react';

const Page1mey3rs = lazy(() => import('./Page'));

const LazyPage1mey3rs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mey3rs />
  </Suspense>
);

export { LazyPage1mey3rs };
