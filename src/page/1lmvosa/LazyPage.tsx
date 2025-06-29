import React, { lazy, Suspense } from 'react';

const Page1lmvosa = lazy(() => import('./Page'));

const LazyPage1lmvosa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmvosa />
  </Suspense>
);

export { LazyPage1lmvosa };
