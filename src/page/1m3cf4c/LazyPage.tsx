import React, { lazy, Suspense } from 'react';

const Page1m3cf4c = lazy(() => import('./Page'));

const LazyPage1m3cf4c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3cf4c />
  </Suspense>
);

export { LazyPage1m3cf4c };
