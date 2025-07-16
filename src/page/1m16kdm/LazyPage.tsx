import React, { lazy, Suspense } from 'react';

const Page1m16kdm = lazy(() => import('./Page'));

const LazyPage1m16kdm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m16kdm />
  </Suspense>
);

export { LazyPage1m16kdm };
