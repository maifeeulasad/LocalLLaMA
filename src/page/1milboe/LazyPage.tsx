import React, { lazy, Suspense } from 'react';

const Page1milboe = lazy(() => import('./Page'));

const LazyPage1milboe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milboe />
  </Suspense>
);

export { LazyPage1milboe };
