import React, { lazy, Suspense } from 'react';

const Page1m2asou = lazy(() => import('./Page'));

const LazyPage1m2asou = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2asou />
  </Suspense>
);

export { LazyPage1m2asou };
