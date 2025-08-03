import React, { lazy, Suspense } from 'react';

const Page1mft55c = lazy(() => import('./Page'));

const LazyPage1mft55c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mft55c />
  </Suspense>
);

export { LazyPage1mft55c };
