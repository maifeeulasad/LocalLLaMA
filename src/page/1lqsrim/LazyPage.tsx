import React, { lazy, Suspense } from 'react';

const Page1lqsrim = lazy(() => import('./Page'));

const LazyPage1lqsrim = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqsrim />
  </Suspense>
);

export { LazyPage1lqsrim };
