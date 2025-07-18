import React, { lazy, Suspense } from 'react';

const Page1m2o3ht = lazy(() => import('./Page'));

const LazyPage1m2o3ht = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2o3ht />
  </Suspense>
);

export { LazyPage1m2o3ht };
