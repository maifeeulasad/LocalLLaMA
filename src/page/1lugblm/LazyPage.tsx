import React, { lazy, Suspense } from 'react';

const Page1lugblm = lazy(() => import('./Page'));

const LazyPage1lugblm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lugblm />
  </Suspense>
);

export { LazyPage1lugblm };
