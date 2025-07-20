import React, { lazy, Suspense } from 'react';

const Page1m3xgjo = lazy(() => import('./Page'));

const LazyPage1m3xgjo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3xgjo />
  </Suspense>
);

export { LazyPage1m3xgjo };
