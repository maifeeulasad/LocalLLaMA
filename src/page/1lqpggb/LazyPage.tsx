import React, { lazy, Suspense } from 'react';

const Page1lqpggb = lazy(() => import('./Page'));

const LazyPage1lqpggb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqpggb />
  </Suspense>
);

export { LazyPage1lqpggb };
