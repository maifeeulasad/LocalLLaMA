import React, { lazy, Suspense } from 'react';

const Page1m01d8x = lazy(() => import('./Page'));

const LazyPage1m01d8x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m01d8x />
  </Suspense>
);

export { LazyPage1m01d8x };
