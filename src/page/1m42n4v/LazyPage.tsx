import React, { lazy, Suspense } from 'react';

const Page1m42n4v = lazy(() => import('./Page'));

const LazyPage1m42n4v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m42n4v />
  </Suspense>
);

export { LazyPage1m42n4v };
