import React, { lazy, Suspense } from 'react';

const Page1mhchdb = lazy(() => import('./Page'));

const LazyPage1mhchdb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhchdb />
  </Suspense>
);

export { LazyPage1mhchdb };
