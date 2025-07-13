import React, { lazy, Suspense } from 'react';

const Page1lyhnhw = lazy(() => import('./Page'));

const LazyPage1lyhnhw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyhnhw />
  </Suspense>
);

export { LazyPage1lyhnhw };
