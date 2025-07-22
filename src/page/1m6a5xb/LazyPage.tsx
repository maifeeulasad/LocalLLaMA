import React, { lazy, Suspense } from 'react';

const Page1m6a5xb = lazy(() => import('./Page'));

const LazyPage1m6a5xb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6a5xb />
  </Suspense>
);

export { LazyPage1m6a5xb };
