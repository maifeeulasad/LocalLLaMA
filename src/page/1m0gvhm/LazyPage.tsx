import React, { lazy, Suspense } from 'react';

const Page1m0gvhm = lazy(() => import('./Page'));

const LazyPage1m0gvhm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0gvhm />
  </Suspense>
);

export { LazyPage1m0gvhm };
