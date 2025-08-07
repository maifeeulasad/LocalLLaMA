import React, { lazy, Suspense } from 'react';

const Page1mjtq7o = lazy(() => import('./Page'));

const LazyPage1mjtq7o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjtq7o />
  </Suspense>
);

export { LazyPage1mjtq7o };
