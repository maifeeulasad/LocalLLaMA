import React, { lazy, Suspense } from 'react';

const Page1m5ro7s = lazy(() => import('./Page'));

const LazyPage1m5ro7s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5ro7s />
  </Suspense>
);

export { LazyPage1m5ro7s };
