import React, { lazy, Suspense } from 'react';

const Page1m3jogm = lazy(() => import('./Page'));

const LazyPage1m3jogm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3jogm />
  </Suspense>
);

export { LazyPage1m3jogm };
