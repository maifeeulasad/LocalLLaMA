import React, { lazy, Suspense } from 'react';

const Page1m66v6q = lazy(() => import('./Page'));

const LazyPage1m66v6q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m66v6q />
  </Suspense>
);

export { LazyPage1m66v6q };
