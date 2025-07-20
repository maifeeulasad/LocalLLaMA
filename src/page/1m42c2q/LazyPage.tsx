import React, { lazy, Suspense } from 'react';

const Page1m42c2q = lazy(() => import('./Page'));

const LazyPage1m42c2q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m42c2q />
  </Suspense>
);

export { LazyPage1m42c2q };
