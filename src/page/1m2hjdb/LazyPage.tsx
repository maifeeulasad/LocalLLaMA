import React, { lazy, Suspense } from 'react';

const Page1m2hjdb = lazy(() => import('./Page'));

const LazyPage1m2hjdb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2hjdb />
  </Suspense>
);

export { LazyPage1m2hjdb };
