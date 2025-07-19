import React, { lazy, Suspense } from 'react';

const Page1m3kjsm = lazy(() => import('./Page'));

const LazyPage1m3kjsm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3kjsm />
  </Suspense>
);

export { LazyPage1m3kjsm };
