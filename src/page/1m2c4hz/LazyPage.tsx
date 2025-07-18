import React, { lazy, Suspense } from 'react';

const Page1m2c4hz = lazy(() => import('./Page'));

const LazyPage1m2c4hz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2c4hz />
  </Suspense>
);

export { LazyPage1m2c4hz };
