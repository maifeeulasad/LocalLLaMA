import React, { lazy, Suspense } from 'react';

const Page1mgv74s = lazy(() => import('./Page'));

const LazyPage1mgv74s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgv74s />
  </Suspense>
);

export { LazyPage1mgv74s };
