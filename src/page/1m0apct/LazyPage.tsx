import React, { lazy, Suspense } from 'react';

const Page1m0apct = lazy(() => import('./Page'));

const LazyPage1m0apct = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0apct />
  </Suspense>
);

export { LazyPage1m0apct };
