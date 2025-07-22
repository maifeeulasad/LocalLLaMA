import React, { lazy, Suspense } from 'react';

const Page1m5x04m = lazy(() => import('./Page'));

const LazyPage1m5x04m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5x04m />
  </Suspense>
);

export { LazyPage1m5x04m };
