import React, { lazy, Suspense } from 'react';

const Page1lx6dcm = lazy(() => import('./Page'));

const LazyPage1lx6dcm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx6dcm />
  </Suspense>
);

export { LazyPage1lx6dcm };
