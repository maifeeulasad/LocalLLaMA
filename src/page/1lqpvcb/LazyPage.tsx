import React, { lazy, Suspense } from 'react';

const Page1lqpvcb = lazy(() => import('./Page'));

const LazyPage1lqpvcb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqpvcb />
  </Suspense>
);

export { LazyPage1lqpvcb };
