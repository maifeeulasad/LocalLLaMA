import React, { lazy, Suspense } from 'react';

const Page1mko82v = lazy(() => import('./Page'));

const LazyPage1mko82v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mko82v />
  </Suspense>
);

export { LazyPage1mko82v };
