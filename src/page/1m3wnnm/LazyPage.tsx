import React, { lazy, Suspense } from 'react';

const Page1m3wnnm = lazy(() => import('./Page'));

const LazyPage1m3wnnm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3wnnm />
  </Suspense>
);

export { LazyPage1m3wnnm };
