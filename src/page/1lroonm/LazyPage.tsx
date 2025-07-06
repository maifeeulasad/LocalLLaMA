import React, { lazy, Suspense } from 'react';

const Page1lroonm = lazy(() => import('./Page'));

const LazyPage1lroonm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lroonm />
  </Suspense>
);

export { LazyPage1lroonm };
