import React, { lazy, Suspense } from 'react';

const Page1m0gdfi = lazy(() => import('./Page'));

const LazyPage1m0gdfi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0gdfi />
  </Suspense>
);

export { LazyPage1m0gdfi };
