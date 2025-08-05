import React, { lazy, Suspense } from 'react';

const Page1mhrx3m = lazy(() => import('./Page'));

const LazyPage1mhrx3m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhrx3m />
  </Suspense>
);

export { LazyPage1mhrx3m };
