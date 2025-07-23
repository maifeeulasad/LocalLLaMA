import React, { lazy, Suspense } from 'react';

const Page1m6ny2q = lazy(() => import('./Page'));

const LazyPage1m6ny2q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ny2q />
  </Suspense>
);

export { LazyPage1m6ny2q };
