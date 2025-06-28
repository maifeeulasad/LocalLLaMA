import React, { lazy, Suspense } from 'react';

const Page1bqmuto = lazy(() => import('./Page'));

const LazyPage1bqmuto = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1bqmuto />
  </Suspense>
);

export { LazyPage1bqmuto };
