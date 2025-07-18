import React, { lazy, Suspense } from 'react';

const Page1m2xh8s = lazy(() => import('./Page'));

const LazyPage1m2xh8s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2xh8s />
  </Suspense>
);

export { LazyPage1m2xh8s };
