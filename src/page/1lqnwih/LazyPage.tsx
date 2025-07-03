import React, { lazy, Suspense } from 'react';

const Page1lqnwih = lazy(() => import('./Page'));

const LazyPage1lqnwih = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqnwih />
  </Suspense>
);

export { LazyPage1lqnwih };
