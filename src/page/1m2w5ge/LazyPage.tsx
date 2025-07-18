import React, { lazy, Suspense } from 'react';

const Page1m2w5ge = lazy(() => import('./Page'));

const LazyPage1m2w5ge = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2w5ge />
  </Suspense>
);

export { LazyPage1m2w5ge };
