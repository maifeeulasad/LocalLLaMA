import React, { lazy, Suspense } from 'react';

const Page1mizz4c = lazy(() => import('./Page'));

const LazyPage1mizz4c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizz4c />
  </Suspense>
);

export { LazyPage1mizz4c };
