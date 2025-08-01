import React, { lazy, Suspense } from 'react';

const Page1mer66c = lazy(() => import('./Page'));

const LazyPage1mer66c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mer66c />
  </Suspense>
);

export { LazyPage1mer66c };
