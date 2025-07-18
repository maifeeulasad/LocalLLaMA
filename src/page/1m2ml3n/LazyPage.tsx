import React, { lazy, Suspense } from 'react';

const Page1m2ml3n = lazy(() => import('./Page'));

const LazyPage1m2ml3n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2ml3n />
  </Suspense>
);

export { LazyPage1m2ml3n };
