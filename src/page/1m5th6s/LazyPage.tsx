import React, { lazy, Suspense } from 'react';

const Page1m5th6s = lazy(() => import('./Page'));

const LazyPage1m5th6s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5th6s />
  </Suspense>
);

export { LazyPage1m5th6s };
