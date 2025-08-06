import React, { lazy, Suspense } from 'react';

const Page1min47x = lazy(() => import('./Page'));

const LazyPage1min47x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1min47x />
  </Suspense>
);

export { LazyPage1min47x };
