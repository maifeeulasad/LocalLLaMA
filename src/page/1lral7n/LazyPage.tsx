import React, { lazy, Suspense } from 'react';

const Page1lral7n = lazy(() => import('./Page'));

const LazyPage1lral7n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lral7n />
  </Suspense>
);

export { LazyPage1lral7n };
