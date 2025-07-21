import React, { lazy, Suspense } from 'react';

const Page1m5fcdo = lazy(() => import('./Page'));

const LazyPage1m5fcdo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5fcdo />
  </Suspense>
);

export { LazyPage1m5fcdo };
