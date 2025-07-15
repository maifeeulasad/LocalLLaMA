import React, { lazy, Suspense } from 'react';

const Page1m0d0vz = lazy(() => import('./Page'));

const LazyPage1m0d0vz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0d0vz />
  </Suspense>
);

export { LazyPage1m0d0vz };
