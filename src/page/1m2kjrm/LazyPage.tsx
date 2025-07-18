import React, { lazy, Suspense } from 'react';

const Page1m2kjrm = lazy(() => import('./Page'));

const LazyPage1m2kjrm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2kjrm />
  </Suspense>
);

export { LazyPage1m2kjrm };
