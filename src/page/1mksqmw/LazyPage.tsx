import React, { lazy, Suspense } from 'react';

const Page1mksqmw = lazy(() => import('./Page'));

const LazyPage1mksqmw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mksqmw />
  </Suspense>
);

export { LazyPage1mksqmw };
