import React, { lazy, Suspense } from 'react';

const Page1lsm0ua = lazy(() => import('./Page'));

const LazyPage1lsm0ua = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsm0ua />
  </Suspense>
);

export { LazyPage1lsm0ua };
