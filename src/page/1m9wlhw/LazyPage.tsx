import React, { lazy, Suspense } from 'react';

const Page1m9wlhw = lazy(() => import('./Page'));

const LazyPage1m9wlhw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9wlhw />
  </Suspense>
);

export { LazyPage1m9wlhw };
