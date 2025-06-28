import React, { lazy, Suspense } from 'react';

const Page1lkzynl = lazy(() => import('./Page'));

const LazyPage1lkzynl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lkzynl />
  </Suspense>
);

export { LazyPage1lkzynl };
