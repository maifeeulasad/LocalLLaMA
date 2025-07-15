import React, { lazy, Suspense } from 'react';

const Page1m06lrz = lazy(() => import('./Page'));

const LazyPage1m06lrz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m06lrz />
  </Suspense>
);

export { LazyPage1m06lrz };
