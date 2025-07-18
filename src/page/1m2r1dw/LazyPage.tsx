import React, { lazy, Suspense } from 'react';

const Page1m2r1dw = lazy(() => import('./Page'));

const LazyPage1m2r1dw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2r1dw />
  </Suspense>
);

export { LazyPage1m2r1dw };
