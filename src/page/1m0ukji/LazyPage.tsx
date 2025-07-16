import React, { lazy, Suspense } from 'react';

const Page1m0ukji = lazy(() => import('./Page'));

const LazyPage1m0ukji = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0ukji />
  </Suspense>
);

export { LazyPage1m0ukji };
