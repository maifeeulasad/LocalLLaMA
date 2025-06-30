import React, { lazy, Suspense } from 'react';

const Page1lnjw6m = lazy(() => import('./Page'));

const LazyPage1lnjw6m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnjw6m />
  </Suspense>
);

export { LazyPage1lnjw6m };
