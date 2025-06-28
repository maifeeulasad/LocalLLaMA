import React, { lazy, Suspense } from 'react';

const Page1is1p2o = lazy(() => import('./Page'));

const LazyPage1is1p2o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1is1p2o />
  </Suspense>
);

export { LazyPage1is1p2o };
