import React, { lazy, Suspense } from 'react';

const Page1ho27fr = lazy(() => import('./Page'));

const LazyPage1ho27fr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ho27fr />
  </Suspense>
);

export { LazyPage1ho27fr };
