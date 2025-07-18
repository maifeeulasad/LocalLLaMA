import React, { lazy, Suspense } from 'react';

const Page1m2inuu = lazy(() => import('./Page'));

const LazyPage1m2inuu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2inuu />
  </Suspense>
);

export { LazyPage1m2inuu };
