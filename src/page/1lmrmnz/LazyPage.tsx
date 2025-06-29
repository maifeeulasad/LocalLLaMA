import React, { lazy, Suspense } from 'react';

const Page1lmrmnz = lazy(() => import('./Page'));

const LazyPage1lmrmnz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmrmnz />
  </Suspense>
);

export { LazyPage1lmrmnz };
