import React, { lazy, Suspense } from 'react';

const Page1m5k88s = lazy(() => import('./Page'));

const LazyPage1m5k88s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5k88s />
  </Suspense>
);

export { LazyPage1m5k88s };
