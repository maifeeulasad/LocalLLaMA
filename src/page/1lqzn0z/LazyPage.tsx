import React, { lazy, Suspense } from 'react';

const Page1lqzn0z = lazy(() => import('./Page'));

const LazyPage1lqzn0z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqzn0z />
  </Suspense>
);

export { LazyPage1lqzn0z };
