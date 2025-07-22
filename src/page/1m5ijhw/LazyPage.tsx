import React, { lazy, Suspense } from 'react';

const Page1m5ijhw = lazy(() => import('./Page'));

const LazyPage1m5ijhw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5ijhw />
  </Suspense>
);

export { LazyPage1m5ijhw };
