import React, { lazy, Suspense } from 'react';

const Page1m66qks = lazy(() => import('./Page'));

const LazyPage1m66qks = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m66qks />
  </Suspense>
);

export { LazyPage1m66qks };
