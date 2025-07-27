import React, { lazy, Suspense } from 'react';

const Page1maipzo = lazy(() => import('./Page'));

const LazyPage1maipzo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maipzo />
  </Suspense>
);

export { LazyPage1maipzo };
