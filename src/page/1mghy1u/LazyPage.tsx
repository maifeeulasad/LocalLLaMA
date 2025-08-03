import React, { lazy, Suspense } from 'react';

const Page1mghy1u = lazy(() => import('./Page'));

const LazyPage1mghy1u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mghy1u />
  </Suspense>
);

export { LazyPage1mghy1u };
