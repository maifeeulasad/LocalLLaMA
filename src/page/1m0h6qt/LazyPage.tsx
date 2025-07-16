import React, { lazy, Suspense } from 'react';

const Page1m0h6qt = lazy(() => import('./Page'));

const LazyPage1m0h6qt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0h6qt />
  </Suspense>
);

export { LazyPage1m0h6qt };
