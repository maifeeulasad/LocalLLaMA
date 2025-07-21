import React, { lazy, Suspense } from 'react';

const Page1m55rrt = lazy(() => import('./Page'));

const LazyPage1m55rrt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m55rrt />
  </Suspense>
);

export { LazyPage1m55rrt };
