import React, { lazy, Suspense } from 'react';

const Page1mgocw6 = lazy(() => import('./Page'));

const LazyPage1mgocw6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgocw6 />
  </Suspense>
);

export { LazyPage1mgocw6 };
