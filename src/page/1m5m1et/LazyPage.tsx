import React, { lazy, Suspense } from 'react';

const Page1m5m1et = lazy(() => import('./Page'));

const LazyPage1m5m1et = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5m1et />
  </Suspense>
);

export { LazyPage1m5m1et };
