import React, { lazy, Suspense } from 'react';

const Page1m0nutb = lazy(() => import('./Page'));

const LazyPage1m0nutb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0nutb />
  </Suspense>
);

export { LazyPage1m0nutb };
