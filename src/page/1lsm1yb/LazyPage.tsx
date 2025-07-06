import React, { lazy, Suspense } from 'react';

const Page1lsm1yb = lazy(() => import('./Page'));

const LazyPage1lsm1yb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsm1yb />
  </Suspense>
);

export { LazyPage1lsm1yb };
