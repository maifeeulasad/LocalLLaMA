import React, { lazy, Suspense } from 'react';

const Page1m9019j = lazy(() => import('./Page'));

const LazyPage1m9019j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9019j />
  </Suspense>
);

export { LazyPage1m9019j };
