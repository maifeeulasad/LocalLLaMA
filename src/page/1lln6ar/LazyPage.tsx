import React, { lazy, Suspense } from 'react';

const Page1lln6ar = lazy(() => import('./Page'));

const LazyPage1lln6ar = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lln6ar />
  </Suspense>
);

export { LazyPage1lln6ar };
