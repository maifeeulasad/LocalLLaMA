import React, { lazy, Suspense } from 'react';

const Page1m5q35o = lazy(() => import('./Page'));

const LazyPage1m5q35o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5q35o />
  </Suspense>
);

export { LazyPage1m5q35o };
