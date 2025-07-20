import React, { lazy, Suspense } from 'react';

const Page1m4ktlb = lazy(() => import('./Page'));

const LazyPage1m4ktlb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4ktlb />
  </Suspense>
);

export { LazyPage1m4ktlb };
