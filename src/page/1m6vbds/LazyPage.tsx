import React, { lazy, Suspense } from 'react';

const Page1m6vbds = lazy(() => import('./Page'));

const LazyPage1m6vbds = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6vbds />
  </Suspense>
);

export { LazyPage1m6vbds };
