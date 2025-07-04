import React, { lazy, Suspense } from 'react';

const Page1lqv8l8 = lazy(() => import('./Page'));

const LazyPage1lqv8l8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqv8l8 />
  </Suspense>
);

export { LazyPage1lqv8l8 };
