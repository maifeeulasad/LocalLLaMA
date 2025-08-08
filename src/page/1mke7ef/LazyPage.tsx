import React, { lazy, Suspense } from 'react';

const Page1mke7ef = lazy(() => import('./Page'));

const LazyPage1mke7ef = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mke7ef />
  </Suspense>
);

export { LazyPage1mke7ef };
