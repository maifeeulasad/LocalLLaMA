import React, { lazy, Suspense } from 'react';

const Page1mdmr8m = lazy(() => import('./Page'));

const LazyPage1mdmr8m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdmr8m />
  </Suspense>
);

export { LazyPage1mdmr8m };
