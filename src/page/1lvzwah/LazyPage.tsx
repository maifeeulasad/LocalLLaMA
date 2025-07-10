import React, { lazy, Suspense } from 'react';

const Page1lvzwah = lazy(() => import('./Page'));

const LazyPage1lvzwah = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvzwah />
  </Suspense>
);

export { LazyPage1lvzwah };
