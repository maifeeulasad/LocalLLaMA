import React, { lazy, Suspense } from 'react';

const Page1lvnevz = lazy(() => import('./Page'));

const LazyPage1lvnevz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvnevz />
  </Suspense>
);

export { LazyPage1lvnevz };
