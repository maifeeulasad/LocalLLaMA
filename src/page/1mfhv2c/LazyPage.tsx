import React, { lazy, Suspense } from 'react';

const Page1mfhv2c = lazy(() => import('./Page'));

const LazyPage1mfhv2c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfhv2c />
  </Suspense>
);

export { LazyPage1mfhv2c };
