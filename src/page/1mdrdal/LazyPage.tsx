import React, { lazy, Suspense } from 'react';

const Page1mdrdal = lazy(() => import('./Page'));

const LazyPage1mdrdal = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdrdal />
  </Suspense>
);

export { LazyPage1mdrdal };
