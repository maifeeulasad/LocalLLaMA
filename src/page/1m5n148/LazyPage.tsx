import React, { lazy, Suspense } from 'react';

const Page1m5n148 = lazy(() => import('./Page'));

const LazyPage1m5n148 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5n148 />
  </Suspense>
);

export { LazyPage1m5n148 };
