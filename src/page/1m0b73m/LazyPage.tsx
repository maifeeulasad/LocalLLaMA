import React, { lazy, Suspense } from 'react';

const Page1m0b73m = lazy(() => import('./Page'));

const LazyPage1m0b73m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0b73m />
  </Suspense>
);

export { LazyPage1m0b73m };
