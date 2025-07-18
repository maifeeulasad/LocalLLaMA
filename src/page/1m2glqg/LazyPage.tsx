import React, { lazy, Suspense } from 'react';

const Page1m2glqg = lazy(() => import('./Page'));

const LazyPage1m2glqg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2glqg />
  </Suspense>
);

export { LazyPage1m2glqg };
