import React, { lazy, Suspense } from 'react';

const Page1m09bzn = lazy(() => import('./Page'));

const LazyPage1m09bzn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m09bzn />
  </Suspense>
);

export { LazyPage1m09bzn };
