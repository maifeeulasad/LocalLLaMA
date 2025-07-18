import React, { lazy, Suspense } from 'react';

const Page1m2igfi = lazy(() => import('./Page'));

const LazyPage1m2igfi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2igfi />
  </Suspense>
);

export { LazyPage1m2igfi };
