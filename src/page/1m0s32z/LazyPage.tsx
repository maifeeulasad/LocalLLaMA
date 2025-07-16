import React, { lazy, Suspense } from 'react';

const Page1m0s32z = lazy(() => import('./Page'));

const LazyPage1m0s32z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0s32z />
  </Suspense>
);

export { LazyPage1m0s32z };
