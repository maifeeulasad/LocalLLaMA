import React, { lazy, Suspense } from 'react';

const Page1m0pxot = lazy(() => import('./Page'));

const LazyPage1m0pxot = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0pxot />
  </Suspense>
);

export { LazyPage1m0pxot };
