import React, { lazy, Suspense } from 'react';

const Page1lx3ngj = lazy(() => import('./Page'));

const LazyPage1lx3ngj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx3ngj />
  </Suspense>
);

export { LazyPage1lx3ngj };
