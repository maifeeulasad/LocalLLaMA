import React, { lazy, Suspense } from 'react';

const Page1m3spek = lazy(() => import('./Page'));

const LazyPage1m3spek = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3spek />
  </Suspense>
);

export { LazyPage1m3spek };
