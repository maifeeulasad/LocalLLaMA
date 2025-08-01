import React, { lazy, Suspense } from 'react';

const Page1melcsm = lazy(() => import('./Page'));

const LazyPage1melcsm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1melcsm />
  </Suspense>
);

export { LazyPage1melcsm };
