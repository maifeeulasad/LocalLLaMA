import React, { lazy, Suspense } from 'react';

const Page1m67zde = lazy(() => import('./Page'));

const LazyPage1m67zde = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m67zde />
  </Suspense>
);

export { LazyPage1m67zde };
