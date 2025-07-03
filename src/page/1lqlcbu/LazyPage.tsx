import React, { lazy, Suspense } from 'react';

const Page1lqlcbu = lazy(() => import('./Page'));

const LazyPage1lqlcbu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqlcbu />
  </Suspense>
);

export { LazyPage1lqlcbu };
