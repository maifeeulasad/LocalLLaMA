import React, { lazy, Suspense } from 'react';

const Page1m9bmqm = lazy(() => import('./Page'));

const LazyPage1m9bmqm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9bmqm />
  </Suspense>
);

export { LazyPage1m9bmqm };
